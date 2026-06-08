// Application Data
const appData = {
    "project_info": {
        "title": "AI-Driven Life Cycle Assessment Tool for Metallurgy & Mining",
        "team": "SheSustain",
        "problem_id": "SIH25069",
        "theme": "Advancing Circularity and Sustainability"
    },
    "lca_metrics": {
        "environmental_impacts": [
            {
                "id": "gwp",
                "name": "Global Warming Potential",
                "unit": "kg CO₂ eq./tonne",
                "description": "Greenhouse gas emissions from mining activities",
                "benchmark": 275,
                "target": 200,
                "current": 285
            },
            {
                "id": "acidification",
                "name": "Acidification Potential",
                "unit": "kg SO₂ eq./tonne",
                "description": "Acid rain formation potential",
                "benchmark": 1.2,
                "target": 0.9,
                "current": 1.4
            },
            {
                "id": "eutrophication",
                "name": "Eutrophication Potential",
                "unit": "kg PO₄³⁻ eq./tonne",
                "description": "Water body nutrient pollution",
                "benchmark": 0.8,
                "target": 0.5,
                "current": 0.9
            },
            {
                "id": "human_toxicity",
                "name": "Human Toxicity Potential",
                "unit": "CTUh/tonne",
                "description": "Potential impact on human health",
                "benchmark": 2.1e-6,
                "target": 1.5e-6,
                "current": 2.3e-6
            }
        ],
        "circular_economy_metrics": [
            {
                "id": "resource_productivity",
                "name": "Resource Productivity",
                "unit": "$/kg material",
                "description": "Economic output per unit of raw material",
                "benchmark": 15.5,
                "target": 20.0,
                "current": 14.2
            },
            {
                "id": "recycled_content",
                "name": "Recycled Material Content",
                "unit": "%",
                "description": "Share of recycled materials in production",
                "benchmark": 25,
                "target": 40,
                "current": 18
            },
            {
                "id": "material_circularity",
                "name": "Material Circularity Index",
                "unit": "Index (0-1)",
                "description": "Overall circularity performance",
                "benchmark": 0.65,
                "target": 0.85,
                "current": 0.58
            },
            {
                "id": "waste_recovery",
                "name": "Waste Recovery Rate",
                "unit": "%",
                "description": "Percentage of waste recovered for reuse/recycling",
                "benchmark": 75,
                "target": 90,
                "current": 68
            }
        ],
        "operational_kpis": [
            {
                "id": "energy_intensity",
                "name": "Energy Consumption",
                "unit": "kWh/tonne",
                "description": "Energy used per tonne of material processed",
                "benchmark": 45,
                "target": 35,
                "current": 52
            },
            {
                "id": "water_usage",
                "name": "Water Usage",
                "unit": "m³/tonne",
                "description": "Water consumed per tonne processed",
                "benchmark": 0.65,
                "target": 0.45,
                "current": 0.78
            },
            {
                "id": "ore_recovery",
                "name": "Ore Recovery Rate",
                "unit": "%",
                "description": "Percentage of valuable minerals extracted",
                "benchmark": 91,
                "target": 95,
                "current": 88
            },
            {
                "id": "equipment_utilization",
                "name": "Equipment Utilization",
                "unit": "%",
                "description": "Operational uptime of equipment",
                "benchmark": 85,
                "target": 90,
                "current": 82
            }
        ]
    },
    "ai_capabilities": {
        "predictive_models": [
            {
                "name": "Yield Prediction",
                "algorithm": "XGBoost",
                "accuracy": 94.2,
                "purpose": "Predict metal extraction yields based on ore characteristics"
            },
            {
                "name": "Energy Forecasting",
                "algorithm": "Prophet",
                "accuracy": 89.7,
                "purpose": "Time-series forecasting for energy consumption patterns"
            },
            {
                "name": "Scrap Quality Classification",
                "algorithm": "CNN",
                "accuracy": 92.1,
                "purpose": "Classify scrap quality using computer vision"
            },
            {
                "name": "Environmental Impact Prediction",
                "algorithm": "LightGBM",
                "accuracy": 91.5,
                "purpose": "Predict environmental impacts for different scenarios"
            }
        ],
        "optimization_features": [
            {
                "name": "Multi-objective Optimization",
                "tools": ["Pyomo", "OR-Tools"],
                "objectives": ["Minimize CO₂", "Minimize Cost", "Maximize Recovery", "Minimize Water Usage"]
            },
            {
                "name": "Data Imputation",
                "methods": ["KNN Imputation", "MICE", "Random Forest"],
                "accuracy": 87.3
            }
        ]
    },
    "lifecycle_stages": [
        {
            "stage": "Extraction",
            "processes": ["Drilling", "Blasting", "Loading", "Hauling"],
            "environmental_factors": ["Dust emissions", "Noise", "Land disturbance", "Energy consumption"],
            "circular_opportunities": ["Waste rock utilization", "Energy recovery"]
        },
        {
            "stage": "Processing",
            "processes": ["Crushing", "Grinding", "Flotation", "Smelting"],
            "environmental_factors": ["Energy consumption", "Water usage", "Chemical emissions", "Waste generation"],
            "circular_opportunities": ["By-product recovery", "Water recycling", "Heat recovery"]
        },
        {
            "stage": "Manufacturing",
            "processes": ["Refining", "Alloying", "Shaping", "Finishing"],
            "environmental_factors": ["Energy consumption", "Material losses", "Chemical usage"],
            "circular_opportunities": ["Scrap utilization", "Process optimization", "Material substitution"]
        },
        {
            "stage": "Usage",
            "processes": ["Application", "Maintenance", "Performance"],
            "environmental_factors": ["Service life", "Efficiency", "Maintenance requirements"],
            "circular_opportunities": ["Life extension", "Reuse", "Remanufacturing"]
        },
        {
            "stage": "End-of-Life",
            "processes": ["Collection", "Sorting", "Recovery", "Disposal"],
            "environmental_factors": ["Collection efficiency", "Recovery losses", "Disposal impacts"],
            "circular_opportunities": ["Recycling", "Material recovery", "Secondary production"]
        }
    ],
    "metals_database": [
        { "name": "Aluminum", "status": "Available", "circularity_score": 0.72 },
        { "name": "Copper", "status": "In Development", "circularity_score": 0.65 },
        { "name": "Nickel", "status": "Planned", "circularity_score": 0.58 },
        { "name": "Steel", "status": "Available", "circularity_score": 0.68 },
        { "name": "Titanium", "status": "In Development", "circularity_score": 0.55 },
        { "name": "Zinc", "status": "Available", "circularity_score": 0.70 },
        { "name": "Lead", "status": "Planned", "circularity_score": 0.62 },
        { "name": "Tin", "status": "Available", "circularity_score": 0.66 }
    ],
    "sustainability_goals": {
        "carbon_neutral_by": 2030,
        "circular_economy_target": 85,
        "water_reduction_goal": 40,
        "waste_diversion_target": 95
    }
};

// Application State
let currentSection = 'dashboard';
let isDataUpdating = false;
let updateInterval;

// DOM Elements
let navLinks, sections, kpiValues;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing AI-Driven LCA Tool...');
    
    // Cache DOM elements
    navLinks = document.querySelectorAll('.nav-link');
    sections = document.querySelectorAll('.section');
    kpiValues = {
        efficiency: document.getElementById('efficiency-value'),
        energy: document.getElementById('energy-value'),
        water: document.getElementById('water-value'),
        circularity: document.getElementById('circularity-value')
    };
    
    // Initialize all components
    initializeNavigation();
    initializeLifecycleStages();
    initializeMetalsDatabase();
    initializeOptimization();
    initializeReports();
    
    // Start real-time updates
    startRealTimeUpdates();
    
    // Show welcome message
    setTimeout(() => {
        showToast('AI-Driven LCA Tool initialized successfully', 'success');
    }, 1000);
});

// Navigation System
function initializeNavigation() {
    console.log('Initializing navigation...');
    
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            console.log(`Switching to section: ${targetSection}`);
            switchSection(targetSection);
        });
    });
}

function switchSection(sectionName) {
    console.log(`Switching to section: ${sectionName}`);
    
    // Update navigation active state
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('active');
        }
    });
    
    // Update sections visibility
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionName) {
            section.classList.add('active');
        }
    });
    
    currentSection = sectionName;
    
    // Trigger section-specific initialization
    setTimeout(() => {
        if (sectionName === 'metals') {
            renderMetalsTable();
        } else if (sectionName === 'optimization') {
            updateSliderValues();
        }
    }, 100);
}

// Real-time Data Updates
function startRealTimeUpdates() {
    console.log('Starting real-time updates...');
    
    // Initial update
    updateKPIValues();
    
    // Set interval for updates
    updateInterval = setInterval(() => {
        if (!isDataUpdating) {
            updateKPIValues();
            updatePredictions();
        }
    }, 30000); // Update every 30 seconds
}

function updateKPIValues() {
    // Simulate real-time data changes with more realistic variations
    const efficiency = Math.floor(Math.random() * 15) + 75; // 75-90%
    const energy = (Math.random() * 8 + 48).toFixed(1); // 48-56 kWh/tonne
    const water = (Math.random() * 0.15 + 0.70).toFixed(2); // 0.70-0.85 m³/tonne
    const circularity = (Math.random() * 0.15 + 0.60).toFixed(2); // 0.60-0.75
    
    if (kpiValues.efficiency) kpiValues.efficiency.textContent = `${efficiency}%`;
    if (kpiValues.energy) kpiValues.energy.textContent = `${energy} kWh/tonne`;
    if (kpiValues.water) kpiValues.water.textContent = `${water} m³/tonne`;
    if (kpiValues.circularity) kpiValues.circularity.textContent = circularity;
    
    // Update trends
    updateTrends();
}

function updateTrends() {
    const trends = document.querySelectorAll('.kpi-trend');
    trends.forEach(trend => {
        const change = (Math.random() * 6 - 3).toFixed(1); // -3% to +3%
        const isPositive = parseFloat(change) > 0;
        trend.textContent = `${isPositive ? '+' : ''}${change}%`;
        trend.className = `kpi-trend ${isPositive ? 'trend-up' : 'trend-down'}`;
    });
}

function updatePredictions() {
    const predictionElements = document.querySelectorAll('.prediction-value');
    const predictionData = [
        ['5 days', '6 days', '7 days', '8 days', '9 days'],
        ['87.8%', '88.5%', '89.2%', '90.1%', '88.7%'],
        ['↓ 2.8%', '↓ 3.2%', '↑ 1.5%', '↓ 4.1%', '↑ 2.3%']
    ];
    
    predictionElements.forEach((element, index) => {
        if (predictionData[index]) {
            const randomValue = predictionData[index][Math.floor(Math.random() * predictionData[index].length)];
            element.textContent = randomValue;
            
            // Update trend classes for the third prediction
            if (index === 2) {
                element.className = `prediction-value ${randomValue.includes('↑') ? 'trend-up' : 'trend-down'}`;
            }
        }
    });
}

// Lifecycle Stages
function initializeLifecycleStages() {
    console.log('Initializing lifecycle stages...');
    
    // Wait for DOM to be ready
    setTimeout(() => {
        const stages = document.querySelectorAll('.timeline-stage');
        const detailsContainer = document.getElementById('stage-details');
        
        if (stages.length === 0) {
            console.warn('No lifecycle stages found');
            return;
        }
        
        stages.forEach((stage, index) => {
            stage.addEventListener('click', () => {
                console.log(`Clicked stage: ${stage.getAttribute('data-stage')}`);
                
                // Remove active from all stages
                stages.forEach(s => s.classList.remove('active'));
                // Add active to clicked stage
                stage.classList.add('active');
                
                const stageType = stage.getAttribute('data-stage');
                showStageDetails(stageType, detailsContainer);
                
                showToast(`Viewing ${stageType} stage details`, 'info');
            });
            
            // Make stages visually interactive
            stage.style.cursor = 'pointer';
        });
        
        console.log(`Initialized ${stages.length} lifecycle stages`);
    }, 500);
}

function showStageDetails(stageType, container) {
    if (!container) {
        console.warn('Stage details container not found');
        return;
    }
    
    // Map stage data-attribute to actual stage name
    const stageMapping = {
        'extraction': 'Extraction',
        'processing': 'Processing',
        'manufacturing': 'Manufacturing',
        'usage': 'Usage',
        'end-of-life': 'End-of-Life'
    };
    
    const stageName = stageMapping[stageType] || stageType;
    const stageData = appData.lifecycle_stages.find(s => s.stage === stageName);
    
    if (!stageData) {
        console.warn(`No data found for stage: ${stageName}`);
        return;
    }
    
    const html = `
        <div class="card">
            <div class="card__body">
                <h3>${stageData.stage} Stage</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-24); margin-top: var(--space-24);">
                    <div>
                        <h4 style="color: var(--color-primary); margin-bottom: var(--space-12);">Processes</h4>
                        <ul style="margin: 0; padding-left: var(--space-20); color: var(--color-text);">
                            ${stageData.processes.map(process => `<li style="margin-bottom: var(--space-4);">${process}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: var(--color-warning); margin-bottom: var(--space-12);">Environmental Factors</h4>
                        <ul style="margin: 0; padding-left: var(--space-20); color: var(--color-text);">
                            ${stageData.environmental_factors.map(factor => `<li style="margin-bottom: var(--space-4);">${factor}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: var(--color-success); margin-bottom: var(--space-12);">Circular Opportunities</h4>
                        <ul style="margin: 0; padding-left: var(--space-20); color: var(--color-text);">
                            ${stageData.circular_opportunities.map(opp => `<li style="margin-bottom: var(--space-4);">${opp}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Metals Database
function initializeMetalsDatabase() {
    console.log('Initializing metals database...');
    
    // Wait for DOM to be ready
    setTimeout(() => {
        const searchInput = document.getElementById('metals-search');
        const filterSelect = document.getElementById('metals-filter');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                console.log(`Search input: ${e.target.value}`);
                renderMetalsTable();
            });
        }
        
        if (filterSelect) {
            filterSelect.addEventListener('change', (e) => {
                console.log(`Filter changed: ${e.target.value}`);
                renderMetalsTable();
            });
        }
        
        // Initial render
        renderMetalsTable();
        
        console.log('Metals database initialized');
    }, 500);
}

function renderMetalsTable() {
    const tbody = document.getElementById('metals-tbody');
    if (!tbody) {
        console.warn('Metals table body not found');
        return;
    }
    
    const searchTerm = (document.getElementById('metals-search')?.value || '').toLowerCase();
    const statusFilter = document.getElementById('metals-filter')?.value || '';
    
    console.log(`Filtering metals: search="${searchTerm}", status="${statusFilter}"`);
    
    let filteredMetals = appData.metals_database.filter(metal => {
        const matchesSearch = metal.name.toLowerCase().includes(searchTerm);
        const matchesFilter = !statusFilter || metal.status === statusFilter;
        return matchesSearch && matchesFilter;
    });
    
    const html = filteredMetals.map(metal => {
        const statusClass = metal.status === 'Available' ? 'success' : 
                           metal.status === 'In Development' ? 'warning' : 'info';
        
        return `
            <tr>
                <td><strong>${metal.name}</strong></td>
                <td><span class="status status--${statusClass}">${metal.status}</span></td>
                <td>${metal.circularity_score.toFixed(2)}</td>
                <td>
                    <button class="btn btn--sm btn--outline" onclick="viewMetalDetails('${metal.name}')">
                        View Details
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    
    tbody.innerHTML = html || '<tr><td colspan="4" style="text-align: center; color: var(--color-text-secondary); padding: var(--space-32);">No metals found matching your criteria</td></tr>';
    
    console.log(`Rendered ${filteredMetals.length} metals`);
}

function handleLogout() {
    // Redirect to sign-in page
    window.location.href = "login.html"; 
}


// Global function for viewing metal details
window.viewMetalDetails = function(metalName) {
    const metal = appData.metals_database.find(m => m.name === metalName);
    if (metal) {
        const message = `${metal.name}: Status: ${metal.status}, Circularity Score: ${metal.circularity_score.toFixed(2)}`;
        showToast(message, 'info');
        console.log(`Viewing details for ${metalName}:`, metal);
    }
};

// Optimization Tools
function initializeOptimization() {
    console.log('Initializing optimization tools...');
    
    setTimeout(() => {
        const sliders = document.querySelectorAll('.slider');
        const runBtn = document.getElementById('run-optimization');
        
        sliders.forEach(slider => {
            slider.addEventListener('input', () => {
                updateSliderValues();
                balanceWeights();
            });
        });
        
        if (runBtn) {
            runBtn.addEventListener('click', runOptimization);
        }
        
        updateSliderValues();
        
        console.log(`Initialized ${sliders.length} optimization sliders`);
    }, 500);
}

function updateSliderValues() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const valueSpan = slider.parentElement.querySelector('.weight-value');
        if (valueSpan) {
            valueSpan.textContent = `${slider.value}%`;
        }
    });
}

function balanceWeights() {
    // Ensure weights don't exceed 100% total
    const sliders = document.querySelectorAll('.slider');
    let total = 0;
    
    sliders.forEach(slider => {
        total += parseInt(slider.value);
    });
    
    if (total > 100) {
        // Proportionally reduce all values
        sliders.forEach(slider => {
            const newValue = Math.floor((parseInt(slider.value) / total) * 100);
            slider.value = newValue;
        });
        updateSliderValues();
    }
}

function runOptimization() {
    console.log('Running optimization...');
    
    const btn = document.getElementById('run-optimization');
    const spinner = btn.querySelector('.loading-spinner');
    const text = btn.querySelector('.btn-text');
    const resultsContent = document.getElementById('results-content');
    
    // Show loading state
    btn.disabled = true;
    if (spinner) spinner.classList.remove('hidden');
    if (text) text.textContent = 'Optimizing...';
    
    // Get current weights
    const weights = {
        co2: document.getElementById('co2-weight')?.value || 25,
        cost: document.getElementById('cost-weight')?.value || 30,
        recovery: document.getElementById('recovery-weight')?.value || 25,
        water: document.getElementById('water-weight')?.value || 20
    };
    
    console.log('Optimization weights:', weights);
    
    // Simulate optimization process
    setTimeout(() => {
        const results = generateOptimizationResults(weights);
        displayOptimizationResults(results, resultsContent);
        
        // Reset button state
        btn.disabled = false;
        if (spinner) spinner.classList.add('hidden');
        if (text) text.textContent = 'Run Optimization';
        
        showToast('Multi-objective optimization completed successfully', 'success');
    }, 3000);
}

function generateOptimizationResults(weights) {
    // Generate results based on weights (higher weight = better improvement)
    const co2_reduction = (Math.random() * 15 + (weights.co2 / 10)).toFixed(1);
    const cost_savings = (Math.random() * 12 + (weights.cost / 10)).toFixed(1);
    const recovery_improvement = (Math.random() * 10 + (weights.recovery / 10)).toFixed(1);
    const water_reduction = (Math.random() * 20 + (weights.water / 10)).toFixed(1);
    
    return {
        co2_reduction,
        cost_savings,
        recovery_improvement,
        water_reduction,
        total_score: ((parseFloat(co2_reduction) + parseFloat(cost_savings) + 
                      parseFloat(recovery_improvement) + parseFloat(water_reduction)) / 4).toFixed(1)
    };
}

function displayOptimizationResults(results, container) {
    if (!container) return;
    
    const html = `
        <div class="optimization-result-grid">
            <div class="result-item">
                <h4>CO₂ Emission Reduction</h4>
                <div class="result-value">${results.co2_reduction}%</div>
                <p>Potential reduction in greenhouse gas emissions</p>
            </div>
            <div class="result-item">
                <h4>Cost Savings</h4>
                <div class="result-value">${results.cost_savings}%</div>
                <p>Expected operational cost reduction</p>
            </div>
            <div class="result-item">
                <h4>Recovery Rate Improvement</h4>
                <div class="result-value">${results.recovery_improvement}%</div>
                <p>Enhanced material recovery efficiency</p>
            </div>
            <div class="result-item">
                <h4>Water Usage Reduction</h4>
                <div class="result-value">${results.water_reduction}%</div>
                <p>Decreased water consumption per tonne</p>
            </div>
        </div>
        <div style="margin-top: var(--space-20); text-align: center;">
            <h4>Overall Optimization Score</h4>
            <div style="font-size: var(--font-size-2xl); color: var(--color-success); font-weight: var(--font-weight-bold);">
                ${results.total_score}%
            </div>
            <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">
                Weighted average improvement across all objectives
            </p>
        </div>
        <style>
        .optimization-result-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--space-16);
            margin-top: var(--space-16);
        }
        .result-item {
            background: var(--color-secondary);
            padding: var(--space-16);
            border-radius: var(--radius-base);
            text-align: center;
            border: 1px solid var(--color-card-border);
        }
        .result-item h4 {
            margin: 0 0 var(--space-8) 0;
            color: var(--color-text);
            font-size: var(--font-size-sm);
        }
        .result-value {
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-bold);
            color: var(--color-success);
            margin-bottom: var(--space-8);
        }
        .result-item p {
            margin: 0;
            color: var(--color-text-secondary);
            font-size: var(--font-size-xs);
        }
        </style>
    `;
    
    container.innerHTML = html;
}

// Reports System
function initializeReports() {
    console.log('Initializing reports system...');
    
    setTimeout(() => {
        const buttons = {
            sustainability: document.getElementById('generate-sustainability-report'),
            exportJson: document.getElementById('export-json'),
            exportCsv: document.getElementById('export-csv'),
            print: document.getElementById('print-report')
        };
        
        if (buttons.sustainability) {
            buttons.sustainability.addEventListener('click', generateSustainabilityReport);
        }
        
        if (buttons.exportJson) {
            buttons.exportJson.addEventListener('click', exportDataAsJson);
        }
        
        if (buttons.exportCsv) {
            buttons.exportCsv.addEventListener('click', exportDataAsCsv);
        }
        
        if (buttons.print) {
            buttons.print.addEventListener('click', printReport);
        }
        
        console.log('Reports system initialized');
    }, 500);
}

function generateSustainabilityReport() {
    console.log('Generating sustainability report...');
    
    const preview = document.getElementById('report-preview');
    if (!preview) return;
    
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
    const html = `
        <h4>Sustainability Report - ${date}</h4>
        <div class="preview-content">
            <p style="color: var(--color-text-secondary); font-size: var(--font-size-xs); margin-bottom: var(--space-16);">
                Generated on ${date} at ${time} | Team SheSustain | SIH2025
            </p>
            
            <h5 style="color: var(--color-primary);">Executive Summary</h5>
            <p>Current environmental performance shows mixed results with significant opportunities for improvement across key sustainability metrics. AI-driven optimization models indicate potential for 15-25% efficiency gains.</p>
            
            <h5 style="color: var(--color-primary);">Key Performance Indicators</h5>
            <ul style="margin: var(--space-8) 0 var(--space-16) var(--space-20);">
                <li>Overall Efficiency: ${kpiValues.efficiency?.textContent || '82%'}</li>
                <li>Energy Consumption: ${kpiValues.energy?.textContent || '52 kWh/tonne'}</li>
                <li>Water Usage: ${kpiValues.water?.textContent || '0.78 m³/tonne'}</li>
                <li>Circularity Score: ${kpiValues.circularity?.textContent || '0.68'}</li>
            </ul>
            
            <h5 style="color: var(--color-warning);">Environmental Impact Assessment</h5>
            <p>Current Global Warming Potential exceeds targets by 30%. Acidification and Eutrophication levels also require immediate attention. Immediate action required for CO₂ reduction initiatives.</p>
            
            <h5 style="color: var(--color-success);">Circular Economy Progress</h5>
            <p>Resource productivity at 71% of target (14.2/20.0 $/kg). Recycled material content needs improvement (18% vs 40% target). Material Circularity Index shows steady progress at 68% achievement.</p>
            
            <h5 style="color: var(--color-info);">AI Model Performance</h5>
            <ul style="margin: var(--space-8) 0 var(--space-16) var(--space-20);">
                <li>Yield Prediction (XGBoost): 94.2% accuracy</li>
                <li>Energy Forecasting (Prophet): 89.7% accuracy</li>
                <li>Scrap Quality Classification (CNN): 92.1% accuracy</li>
                <li>Environmental Impact Prediction (LightGBM): 91.5% accuracy</li>
            </ul>
            
            <h5 style="color: var(--color-primary);">Strategic Recommendations</h5>
            <ul style="margin: var(--space-8) 0 var(--space-16) var(--space-20);">
                <li>Implement advanced water recycling systems to reduce consumption by 25%</li>
                <li>Increase recycled material content to 25% within 6 months</li>
                <li>Deploy AI-driven energy optimization for 15% efficiency improvement</li>
                <li>Accelerate circular economy initiatives focusing on waste recovery</li>
                <li>Invest in renewable energy sources for carbon neutrality by 2030</li>
            </ul>
            
            <div style="margin-top: var(--space-24); padding: var(--space-16); background: var(--color-bg-1); border-radius: var(--radius-base);">
                <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-text-secondary);">
                    This report was generated by the AI-Driven LCA Tool for Metallurgy & Mining developed by Team SheSustain for SIH2025.
                </p>
            </div>
        </div>
    `;
    
    preview.innerHTML = html;
    showToast('Sustainability report generated successfully', 'success');
}

function exportDataAsJson() {
    console.log('Exporting data as JSON...');
    
    const exportData = {
        timestamp: new Date().toISOString(),
        project_info: appData.project_info,
        current_metrics: {
            efficiency: kpiValues.efficiency?.textContent || 'N/A',
            energy: kpiValues.energy?.textContent || 'N/A',
            water: kpiValues.water?.textContent || 'N/A',
            circularity: kpiValues.circularity?.textContent || 'N/A'
        },
        environmental_impacts: appData.lca_metrics.environmental_impacts,
        circular_economy_metrics: appData.lca_metrics.circular_economy_metrics,
        operational_kpis: appData.lca_metrics.operational_kpis,
        ai_models: appData.ai_capabilities.predictive_models,
        metals_database: appData.metals_database,
        sustainability_goals: appData.sustainability_goals
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lca-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Data exported as JSON successfully', 'success');
}

function exportDataAsCsv() {
    console.log('Exporting data as CSV...');
    
    const csvData = [
        ['Category', 'Metric', 'Current', 'Benchmark', 'Target', 'Unit'],
        ...appData.lca_metrics.environmental_impacts.map(metric => [
            'Environmental',
            metric.name,
            metric.current,
            metric.benchmark,
            metric.target,
            metric.unit
        ]),
        ...appData.lca_metrics.circular_economy_metrics.map(metric => [
            'Circular Economy',
            metric.name,
            metric.current,
            metric.benchmark,
            metric.target,
            metric.unit
        ]),
        ...appData.lca_metrics.operational_kpis.map(metric => [
            'Operational',
            metric.name,
            metric.current,
            metric.benchmark,
            metric.target,
            metric.unit
        ])
    ];
    
    const csvContent = csvData.map(row => row.map(field => `"${field}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lca-metrics-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Data exported as CSV successfully', 'success');
}

function printReport() {
    console.log('Opening print dialog...');
    window.print();
    showToast('Print dialog opened', 'info');
}

async function runKNN() {
  const energy = parseFloat(document.getElementById("input-energy").value);
  const water = parseFloat(document.getElementById("input-water").value);
  const co2 = parseFloat(document.getElementById("input-co2").value);
  const recovery = parseFloat(document.getElementById("input-recovery").value);

  if (isNaN(energy) || isNaN(water) || isNaN(co2) || isNaN(recovery)) {
    document.getElementById("knn-result").innerHTML =
      "<span style='color:red;'>⚠️ Please fill all fields correctly.</span>";
    return;
  }

  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ features: [energy, water, co2, recovery] })
  });

  const result = await response.json();
  document.getElementById("knn-result").innerHTML =
    `<strong>Predicted Output:</strong> ${result.prediction}`;
}


// Toast Notification System
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.parentElement.removeChild(toast);
        }
    }, 4000);
    
    console.log(`Toast shown: ${message} (${type})`);
}

// Loading Overlay
function showLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

// Utility Functions
function formatNumber(value, decimals = 2) {
    return parseFloat(value).toFixed(decimals);
}

function calculatePercentage(current, target) {
    return Math.round((current / target) * 100);
}

function getStatusClass(current, target) {
    const ratio = current / target;
    if (ratio <= 1) return 'success';
    if (ratio <= 1.2) return 'warning';
    return 'error';
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
    console.log('Application cleanup completed');
});