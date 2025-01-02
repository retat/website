function calculateTime() {
  const batterySize = parseFloat(document.getElementById("battery").value);
  const currentCharge = parseFloat(
    document.getElementById("current-charge").value,
  );
  const chargingGoal = parseFloat(
    document.getElementById("charging-goal").value,
  );
  const chargingSpeed = parseFloat(
    document.getElementById("charging-speed").value,
  );

  if (currentCharge >= chargingGoal) {
    document.getElementById("minutes").innerText = "0";
    document.getElementById("hours").innerText = "0:00";
    document.getElementById("finish-time").innerText = "Jetzt";
    return;
  }

  const chargeNeeded = ((chargingGoal - currentCharge) / 100) * batterySize;
  const timeInMinutes = (chargeNeeded / chargingSpeed) * 60;

  const hours = Math.floor(timeInMinutes / 60);
  const minutes = Math.round(timeInMinutes % 60);

  const now = new Date();
  const finishTime = new Date(now.getTime() + timeInMinutes * 60000);
  const finishTimeFormatted = finishTime.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Update table
  document.getElementById("time").innerText =
    `${hours}:${minutes.toString().padStart(2, "0")}h`;
  document.getElementById("finish-time").innerText = finishTimeFormatted;
}
