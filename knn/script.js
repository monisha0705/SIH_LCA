async function submitProcessInput() {
  const data = {
    EnergyConsumption: parseFloat(document.getElementById("energy").value),
    WaterUsage: parseFloat(document.getElementById("water").value),
    ProcessParameter: parseFloat(document.getElementById("param").value),
    OperatingTemp: parseFloat(document.getElementById("temp").value),
    DailyCapacity: parseFloat(document.getElementById("capacity").value)
  };

  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  alert("Predicted Impact Score: " + result.predicted_impact);
}
