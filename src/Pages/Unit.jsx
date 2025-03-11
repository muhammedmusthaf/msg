import { useState, useEffect } from "react";
import "../styles/Unit.css";

const conversions = {
    // Meter conversions
    "Meter to Feet": (value) => value * 3.28084,
    "Feet to Meter": (value) => value / 3.28084,
    
    // Feet conversions
    "Feet to MM": (value) => value * 304.8,
    "MM to Feet": (value) => value / 304.8,
    
    // Length (Meter) conversions
    "Meter to MM": (value) => value * 1000,
    "MM to Meter": (value) => value / 1000,
};

function Unit() {
    const [conversionType, setConversionType] = useState("Meter to Feet");
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        setInputValue("");
        setResult("");
    }, [conversionType]);

    const handleConvert = () => {
        if (inputValue === "") return;
        const convertedValue = conversions[conversionType](parseFloat(inputValue));
        setResult(convertedValue.toFixed(4));
    };

    return (
        <div className="unit-converter">
            <div className="converter-container">
                <h2>Unit Converter</h2>
                
                <div className="conversion-group">
                    <label>Conversion Type:</label>
                    <div className="radio-grid">
                        {/* Meter Conversions */}
                        <label>
                            <input
                                type="radio"
                                name="conversionType"
                                value="Meter to Feet"
                                checked={conversionType === "Meter to Feet"}
                                onChange={(e) => setConversionType(e.target.value)}
                            />
                            Meter to Feet
                        </label>
                        
                        <label>
                            <input
                                type="radio"
                                name="conversionType"
                                value="Feet to Meter"
                                checked={conversionType === "Feet to Meter"}
                                onChange={(e) => setConversionType(e.target.value)}
                            />
                            Feet to Meter
                        </label>

                        {/* Feet Conversions */}
                        <label>
                            <input
                                type="radio"
                                name="conversionType"
                                value="Feet to MM"
                                checked={conversionType === "Feet to MM"}
                                onChange={(e) => setConversionType(e.target.value)}
                            />
                            Feet to MM
                        </label>
                        
                        <label>
                            <input
                                type="radio"
                                name="conversionType"
                                value="MM to Feet"
                                checked={conversionType === "MM to Feet"}
                                onChange={(e) => setConversionType(e.target.value)}
                            />
                            MM to Feet
                        </label>

                        {/* Length (Meter) Conversions */}
                        <label>
                            <input
                                type="radio"
                                name="conversionType"
                                value="Meter to MM"
                                checked={conversionType === "Meter to MM"}
                                onChange={(e) => setConversionType(e.target.value)}
                            />
                            Meter to MM
                        </label>
                        
                        <label>
                            <input
                                type="radio"
                                name="conversionType"
                                value="MM to Meter"
                                checked={conversionType === "MM to Meter"}
                                onChange={(e) => setConversionType(e.target.value)}
                            />
                            MM to Meter
                        </label>
                    </div>
                </div>

                <div className="input-group">
                    <label>Input Value:</label>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter value"
                    />
                </div>

                <button className="unitbtn" onClick={handleConvert}>Convert</button>
            </div>

            <div className="result-container">
                <h2>Conversion Result</h2>
                {result !== "" && (
                    <div className="result-display">
                        <span className="result-value">{result}</span>
                        <span className="result-unit">
                            {conversionType.split(" to ")[1]}
                        </span>
                    </div>
                    
                )}
            </div>
        </div>
    );
}

export default Unit;
