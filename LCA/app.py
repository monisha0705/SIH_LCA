from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

# Load trained ML model
with open("lca_model.pkl", "rb") as f:
    knn_model = pickle.load(f)

# ---------------- ROUTES ---------------- #
@app.route("/")
def login():
    return render_template("login.html")   # this is your login/register page

@app.route("/general")
def general_dashboard():
    return render_template("index.html")   # general user dashboard

@app.route("/industrial")
def industrial_dashboard():
    print("✅ Industrial dashboard route called!")  # Debug log
    return render_template("index1.html")


@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Form inputs
        electricity = float(request.form["electricity_kWh"])
        water = float(request.form["water_L"])
        ore_grade = float(request.form["ore_grade_pct"])
        furnace_temp = float(request.form["furnace_temp_C"])
        throughput = float(request.form["throughput_tpd"])

        # Prepare data
        input_data = np.array([[electricity, water, ore_grade, furnace_temp, throughput]])
        prediction = knn_model.predict(input_data)[0]

        return render_template("result.html", prediction=round(prediction, 3))

    except Exception as e:
        return f"❌ Error: {str(e)}", 400

if __name__ == "__main__":
    app.run(debug=True)

