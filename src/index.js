import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const driverNameFirst = document.getElementById("first_name");
  const driverNameSecond = document.getElementById("last_name");
  const resultsContainer = document.getElementById("results-container");
  const resultsBody = document.getElementById("results-body");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    resultsBody.innerHTML = ""; // clear previous results

    try {
      // Step 1: Find driver
      const driverRes = await fetch(
        `https://api.openf1.org/v1/drivers?first_name=${driverNameFirst.value}&last_name=${driverNameSecond.value}`
      );
      const drivers = await driverRes.json();

      if (drivers.length === 0) {
        resultsContainer.classList.remove("hidden");
        resultsBody.innerHTML = `<tr><td colspan="5" class="px-4 py-2 text-center text-red-500">No driver found.</td></tr>`;
        return;
      }

      const driverId = drivers[0].driver_number;
      const driverFullName = drivers[0].full_name;

      // Step 2: Get latest race result
      const racesRes = await fetch(
        `https://api.openf1.org/v1/session_result?driver_number=${driverId}&session_key=latest`
      );
      const races = await racesRes.json();

      if (races.length === 0) {
        resultsContainer.classList.remove("hidden");
        resultsBody.innerHTML = `<tr><td colspan="5" class="px-4 py-2 text-center text-red-500">No race data found.</td></tr>`;
        return;
      }

      const lastRace = races[0];

      const name = await fetch(
        `https://api.openf1.org/v1/sessions?session_key=${racesRes.session_key}`
      );

      const raceName = await name.json();
      // Step 3: Populate table
      resultsContainer.classList.remove("hidden");
      resultsBody.innerHTML = `
          <tr>
            <td class="px-4 py-2">${driverFullName}</td>
            <td class="px-4 py-2">${driverId}</td>
            <td class="px-4 py-2">${raceName.circuit_short_name || "N/A"}</td>
            <td class="px-4 py-2">${lastRace.position || "N/A"}</td>
            <td class="px-4 py-2">${lastRace.points || "0"}</td>
          </tr>
        `;
    } catch (error) {
      console.error("Error fetching driver or race data:", error);
      resultsContainer.classList.remove("hidden");
      resultsBody.innerHTML = `<tr><td colspan="5" class="px-4 py-2 text-center text-red-500">Error fetching data.</td></tr>`;
    }
  });
});
