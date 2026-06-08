import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsRegressor

# 1️⃣ Load your dataset (make sure the path is correct)
file_path = r"C:\Users\poojyasree\Downloads\prototype_lca_dataset_with_impacts (1).csv.xlsx"
data = pd.read_excel(file_path)

print("✅ Dataset loaded successfully!")
print("📊 Columns available:", data.columns.tolist())
print("🔎 First 5 rows:\n", data.head())

# 2️⃣ Select features + target (update column names if different in your file)
X = data[["electricity_kWh", "water_L", "ore_grade_pct", "furnace_temp_C", "throughput_tpd"]]
y = data["CO2_kg"]

# 3️⃣ Train-test split
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

# 4️⃣ Train KNN Model
knn_model = KNeighborsRegressor(n_neighbors=5)
knn_model.fit(X_train, y_train)

# 5️⃣ Evaluate Model
r2 = knn_model.score(X_val, y_val)
print(f"✅ Model trained successfully! R² score: {r2:.3f}")

# 6️⃣ Save model as pickle
with open("lca_model.pkl", "wb") as f:
    pickle.dump(knn_model, f)

print("💾 Model saved as lca_model.pkl")
