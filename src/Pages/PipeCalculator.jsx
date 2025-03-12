import React, { useState, useRef } from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/PipeCalculator.css";

function PipeCalculator() {
  const pipeData = [
    { size: "1/8\"", sch: "40 / STD", kgPerMeter: 0.37 },
    { size: "1/8\"", sch: "80 / XS", kgPerMeter: 0.47 },
    { size: "1/4\"", sch: "40 / STD", kgPerMeter: 0.63 },
    { size: "1/4\"", sch: "80 / XS", kgPerMeter: 0.8 },
    { size: "3/8\"", sch: "40 / STD", kgPerMeter: 0.84 },
    { size: "3/8\"", sch: "80 / XS", kgPerMeter: 1.1 },
    { size: "1/2\"", sch: "40 / STD", kgPerMeter: 1.27 },
    { size: "1/2\"", sch: "80 / XS", kgPerMeter: 1.62 },
    { size: "1/2\"", sch: "160", kgPerMeter: 1.95 },
    { size: "1/2\"", sch: "XXS", kgPerMeter: 2.55 },
    { size: "3/4\"", sch: "40 / STD", kgPerMeter: 1.69 },
    { size: "3/4\"", sch: "80 / XS", kgPerMeter: 2.2 },
    { size: "3/4\"", sch: "160", kgPerMeter: 2.9 },
    { size: "3/4\"", sch: "XXS", kgPerMeter: 3.65 },
    { size: "1\"", sch: "40 / STD", kgPerMeter: 2.5 },
    { size: "1\"", sch: "80 / XS", kgPerMeter: 3.24 },
    { size: "1\"", sch: "160", kgPerMeter: 4.24 },
    { size: "1\"", sch: "XXS", kgPerMeter: 5.45 },
    { size: "1-1/4\"", sch: "40 / STD", kgPerMeter: 3.39 },
    { size: "1-1/4\"", sch: "80 / XS", kgPerMeter: 4.47 },
    { size: "1-1/4\"", sch: "160", kgPerMeter: 5.61 },
    { size: "1-1/4\"", sch: "XXS", kgPerMeter: 7.77 },
    { size: "1-1/2\"", sch: "40 / STD", kgPerMeter: 4.05 },
    { size: "1-1/2\"", sch: "80 / XS", kgPerMeter: 5.41 },
    { size: "1-1/2\"", sch: "160", kgPerMeter: 7.25 },
    { size: "1-1/2\"", sch: "XXS", kgPerMeter: 9.56 },
    { size: "2\"", sch: "40 / STD", kgPerMeter: 5.44 },
    { size: "2\"", sch: "80 / XS", kgPerMeter: 7.48 },
    { size: "2\"", sch: "160", kgPerMeter: 11.11 },
    { size: "2\"", sch: "XXS", kgPerMeter: 13.44 },
    { size: "2-1/2\"", sch: "40 / STD", kgPerMeter: 8.63 },
    { size: "2-1/2\"", sch: "80 / XS", kgPerMeter: 11.41 },
    { size: "2-1/2\"", sch: "160", kgPerMeter: 14.92 },
    { size: "2-1/2\"", sch: "XXS", kgPerMeter: 20.39 },
    { size: "3\"", sch: "40 / STD", kgPerMeter: 11.29 },
    { size: "3\"", sch: "80 / XS", kgPerMeter: 15.27 },
    { size: "3\"", sch: "160", kgPerMeter: 21.35 },
    { size: "3\"", sch: "XXS", kgPerMeter: 27.68 },
    { size: "3-1/2\"", sch: "40 / STD", kgPerMeter: 13.57 },
    { size: "3-1/2\"", sch: "80 / XS", kgPerMeter: 18.63 },
    { size: "4\"", sch: "40 / STD", kgPerMeter: 16.07 },
    { size: "4\"", sch: "80 / XS", kgPerMeter: 22.32 },
    { size: "4\"", sch: "120", kgPerMeter: 28.32 },
    { size: "4\"", sch: "160", kgPerMeter: 33.54 },
    { size: "4\"", sch: "XXS", kgPerMeter: 41.03 },
    { size: "5\"", sch: "40 / STD", kgPerMeter: 21.77 },
    { size: "5\"", sch: "80 / XS", kgPerMeter: 30.97 },
    { size: "5\"", sch: "120", kgPerMeter: 40.28 },
    { size: "5\"", sch: "160", kgPerMeter: 49.11 },
    { size: "5\"", sch: "XXS", kgPerMeter: 57.43 },
    { size: "6\"", sch: "40 / STD", kgPerMeter: 28.26 },
    { size: "6\"", sch: "80 / XS", kgPerMeter: 42.56 },
    { size: "6\"", sch: "120", kgPerMeter: 54.2 },
    { size: "6\"", sch: "160", kgPerMeter: 67.56 },
    { size: "6\"", sch: "XXS", kgPerMeter: 79.22 },
    { size: "8\"", sch: "20", kgPerMeter: 33.31 },
    { size: "8\"", sch: "30", kgPerMeter: 36.81 },
    { size: "8\"", sch: "40 / STD", kgPerMeter: 42.55 },
    { size: "8\"", sch: "60", kgPerMeter: 53.08 },
    { size: "8\"", sch: "80 / XS", kgPerMeter: 64.64 },
    { size: "8\"", sch: "100", kgPerMeter: 75.92 },
    { size: "8\"", sch: "120", kgPerMeter: 90.44 },
    { size: "8\"", sch: "140", kgPerMeter: 100.92 },
    { size: "8\"", sch: "160", kgPerMeter: 111.27 },
    { size: "8\"", sch: "XXS", kgPerMeter: 107.92 },
    { size: "10\"", sch: "20", kgPerMeter: 41.77 },
    { size: "10\"", sch: "30", kgPerMeter: 51.03 },
    { size: "10\"", sch: "40 / STD", kgPerMeter: 60.31 },
    { size: "10\"", sch: "60 / XS", kgPerMeter: 81.55 },
    { size: "10\"", sch: "80", kgPerMeter: 96.01 },
    { size: "10\"", sch: "100", kgPerMeter: 114.75 },
    { size: "10\"", sch: "120", kgPerMeter: 133.06 },
    { size: "10\"", sch: "140 / XXS", kgPerMeter: 155.15 },
    { size: "10\"", sch: "160", kgPerMeter: 172.33 },
    { size: "12\"", sch: "20", kgPerMeter: 49.73 },
    { size: "12\"", sch: "30", kgPerMeter: 65.2 },
    { size: "12\"", sch: "STD", kgPerMeter: 73.88 },
    { size: "12\"", sch: "40", kgPerMeter: 79.73 },
    { size: "12\"", sch: "60", kgPerMeter: 108.96 },
    { size: "12\"", sch: "XS", kgPerMeter: 97.46 },
    { size: "12\"", sch: "80", kgPerMeter: 132.08 },
    { size: "12\"", sch: "100", kgPerMeter: 159.91 },
    { size: "12\"", sch: "120 / XXS", kgPerMeter: 186.97 },
    { size: "12\"", sch: "140", kgPerMeter: 208.14 },
    { size: "12\"", sch: "160", kgPerMeter: 238.76 },
    { size: "14\"", sch: "10", kgPerMeter: 54.69 },
    { size: "14\"", sch: "20", kgPerMeter: 67.9 },
    { size: "14\"", sch: "30 / STD", kgPerMeter: 81.33 },
    { size: "14\"", sch: "40", kgPerMeter: 94.55 },
    { size: "14\"", sch: "60", kgPerMeter: 126.71 },
    { size: "14\"", sch: "XS", kgPerMeter: 107.39 },
    { size: "14\"", sch: "80", kgPerMeter: 158.1 },
    { size: "14\"", sch: "100", kgPerMeter: 194.96 },
    { size: "14\"", sch: "120", kgPerMeter: 224.65 },
    { size: "14\"", sch: "140", kgPerMeter: 253.56 },
    { size: "14\"", sch: "160", kgPerMeter: 281.7 },
    { size: "16\"", sch: "10", kgPerMeter: 62.64 },
    { size: "16\"", sch: "20", kgPerMeter: 77.83 },
    { size: "16\"", sch: "30 / STD", kgPerMeter: 93.27 },
    { size: "16\"", sch: "40 / XS", kgPerMeter: 123.3 },
    { size: "16\"", sch: "60", kgPerMeter: 160.12 },
    { size: "16\"", sch: "80", kgPerMeter: 203.53 },
    { size: "16\"", sch: "100", kgPerMeter: 245.56 },
    { size: "16\"", sch: "120", kgPerMeter: 286.64 },
    { size: "16\"", sch: "140", kgPerMeter: 333.19 },
    { size: "16\"", sch: "160", kgPerMeter: 365.35 },
    { size: "18\"", sch: "10", kgPerMeter: 70.57 },
    { size: "18\"", sch: "20", kgPerMeter: 87.71 },
    { size: "18\"", sch: "30", kgPerMeter: 122.38 },
    { size: "18\"", sch: "STD", kgPerMeter: 105.16 },
    { size: "18\"", sch: "40", kgPerMeter: 155.8 },
    { size: "18\"", sch: "60", kgPerMeter: 205.74 },
    { size: "18\"", sch: "XS", kgPerMeter: 139.15 },
    { size: "18\"", sch: "80", kgPerMeter: 254.55 },
    { size: "18\"", sch: "100", kgPerMeter: 309.62 },
    { size: "18\"", sch: "120", kgPerMeter: 363.56 },
    { size: "18\"", sch: "140", kgPerMeter: 408.26 },
    { size: "18\"", sch: "160", kgPerMeter: 459.37 },
    { size: "20\"", sch: "10", kgPerMeter: 78.22 },
    { size: "20\"", sch: "20 / STD", kgPerMeter: 117.15 },
    { size: "20\"", sch: "30 / XS", kgPerMeter: 155.12 },
    { size: "20\"", sch: "40", kgPerMeter: 183.42 },
    { size: "20\"", sch: "60", kgPerMeter: 247.83 },
    { size: "20\"", sch: "80", kgPerMeter: 311.17 },
    { size: "20\"", sch: "100", kgPerMeter: 381.53 },
    { size: "20\"", sch: "120", kgPerMeter: 441.49 },
    { size: "20\"", sch: "140", kgPerMeter: 508.11 },
    { size: "20\"", sch: "160", kgPerMeter: 564.81 },
    { size: "22\"", sch: "10", kgPerMeter: 86.54 },
    { size: "22\"", sch: "20 / STD", kgPerMeter: 129.13 },
    { size: "22\"", sch: "30 / XS", kgPerMeter: 171.09 },
    { size: "22\"", sch: "60", kgPerMeter: 294.25 },
    { size: "22\"", sch: "80", kgPerMeter: 373.83 },
    { size: "22\"", sch: "100", kgPerMeter: 451.42 },
    { size: "22\"", sch: "120", kgPerMeter: 527.02 },
    { size: "22\"", sch: "140", kgPerMeter: 600.63 },
    { size: "22\"", sch: "160", kgPerMeter: 672.26 },
    { size: "24\"", sch: "10", kgPerMeter: 94.53 },
    { size: "24\"", sch: "20 / STD", kgPerMeter: 141.12 },
    { size: "24\"", sch: "30", kgPerMeter: 209.64 },
    { size: "24\"", sch: "40", kgPerMeter: 255.41 },
    { size: "24\"", sch: "60", kgPerMeter: 355.26 },
    { size: "24\"", sch: "XS", kgPerMeter: 187.06 },
    { size: "24\"", sch: "80", kgPerMeter: 442.08 },
    { size: "24\"", sch: "100", kgPerMeter: 547.71 },
    { size: "24\"", sch: "120", kgPerMeter: 640.03 },
    { size: "24\"", sch: "140", kgPerMeter: 720.15 },
    { size: "24\"", sch: "160", kgPerMeter: 808.22 },
    { size: "26\"", sch: "10", kgPerMeter: 127.36 },
    { size: "26\"", sch: "20 / XS", kgPerMeter: 202.72 },
    { size: "26\"", sch: "STD", kgPerMeter: 152.87 },
    { size: "28\"", sch: "10", kgPerMeter: 137.32 },
    { size: "28\"", sch: "20 / XS", kgPerMeter: 218.68 },
    { size: "28\"", sch: "30", kgPerMeter: 271.21 },
    { size: "28\"", sch: "STD", kgPerMeter: 164.85 },
    { size: "30\"", sch: "10", kgPerMeter: 147.28 },
    { size: "30\"", sch: "20 / XS", kgPerMeter: 234.67 },
    { size: "30\"", sch: "30", kgPerMeter: 292.18 },
    { size: "30\"", sch: "STD", kgPerMeter: 176.84 },
    { size: "32\"", sch: "10", kgPerMeter: 157.24 },
    { size: "32\"", sch: "20 / XS", kgPerMeter: 250.64 },
    { size: "32\"", sch: "30", kgPerMeter: 312.15 },
    { size: "32\"", sch: "STD", kgPerMeter: 188.82 },
    { size: "32\"", sch: "40", kgPerMeter: 342.91 },
    { size: "34\"", sch: "10", kgPerMeter: 167.2 },
    { size: "34\"", sch: "20 / XS", kgPerMeter: 266.61 },
    { size: "34\"", sch: "30", kgPerMeter: 322.12 },
    { size: "34\"", sch: "STD", kgPerMeter: 200.31 },
    { size: "34\"", sch: "40", kgPerMeter: 365.9 },
    { size: "36\"", sch: "10", kgPerMeter: 176.96 },
    { size: "36\"", sch: "20 / XS", kgPerMeter: 282.27 },
    { size: "36\"", sch: "30", kgPerMeter: 351.7 },
    { size: "36\"", sch: "STD", kgPerMeter: 212.56 },
    { size: "36\"", sch: "40", kgPerMeter: 420.42 },
    { size: "38\"", sch: "STD", kgPerMeter: 224.54 },
    { size: "38\"", sch: "XS", kgPerMeter: 298.24 },
    { size: "40\"", sch: "STD", kgPerMeter: 236.53 },
    { size: "40\"", sch: "XS", kgPerMeter: 314.22 },
    { size: "42\"", sch: "STD", kgPerMeter: 248.52 },
    { size: "42\"", sch: "XS", kgPerMeter: 330.19 },
    { size: "44\"", sch: "STD", kgPerMeter: 260.5 },
    { size: "44\"", sch: "XS", kgPerMeter: 346.16 },
    { size: "46\"", sch: "STD", kgPerMeter: 272.25 },
    { size: "46\"", sch: "XS", kgPerMeter: 351.82 },
    { size: "48\"", sch: "STD", kgPerMeter: 284.24 },
    { size: "48\"", sch: "XS", kgPerMeter: 377.79 },
  ];

  const [selectedPipe, setSelectedPipe] = useState(null);
  const [lengthUnit, setLengthUnit] = useState('select');
  const [pipeLength, setPipeLength] = useState('');
  const [rateCurrency, setRateCurrency] = useState('USD');
  const [rateUnit, setRateUnit] = useState('m.ton');
  const [rateValue, setRateValue] = useState('');
  const [results, setResults] = useState({});
  const printRef = useRef(null);

  const uniquePipes = new Set();
  pipeData.forEach(pipe => {
    uniquePipes.add(`${pipe.size} ${pipe.sch}`);
  });

  const calculateResults = () => {
    if (!selectedPipe || !pipeLength || !rateValue || lengthUnit === 'select') {
      alert('Please fill in all required fields.');
      return;
    }


    const { kgPerMeter } = selectedPipe;
    const weightPerMeterTon = kgPerMeter / 1000;
    const weightPerFeetKg = kgPerMeter / 3.28084;
    const weightPerFeetTon = weightPerFeetKg / 1000;

    const lengthInMeters = lengthUnit === 'meter' ? parseFloat(pipeLength) : parseFloat(pipeLength) / 3.28084;
    const lengthInFeet = lengthUnit === 'feet' ? parseFloat(pipeLength) : parseFloat(pipeLength) * 3.28084;
    const lengthInTon = lengthInMeters * weightPerMeterTon;
    const lengthInKg = lengthInTon * 1000;

    let ratePerTon = 0;
    let ratePerKg = 0;
    let ratePerMeter = 0;
    let ratePerFeet = 0;

    if (rateUnit === 'm.ton') {
      ratePerTon = parseFloat(rateValue);
      ratePerKg = ratePerTon / 1000;
      ratePerMeter = ratePerTon * weightPerMeterTon;
      ratePerFeet = ratePerMeter / 3.28084;
    } else if (rateUnit === 'kilogram') {
      ratePerKg = parseFloat(rateValue);
      ratePerTon = ratePerKg * 1000;
      ratePerMeter = ratePerKg * kgPerMeter;
      ratePerFeet = ratePerMeter / 3.28084;
    } else if (rateUnit === 'meter') {
      ratePerMeter = parseFloat(rateValue);
      ratePerTon = ratePerMeter / weightPerMeterTon;
      ratePerKg = ratePerMeter / kgPerMeter;
      ratePerFeet = ratePerMeter / 3.28084;
    } else if (rateUnit === 'feet') {
      ratePerFeet = parseFloat(rateValue);
      ratePerMeter = ratePerFeet * 3.28084;
      ratePerTon = ratePerMeter / weightPerMeterTon;
      ratePerKg = ratePerMeter / kgPerMeter;
    }


    const exchangeRate = 3.67; // Fixed exchange rate

    const convertedRatePerTon = rateCurrency === 'USD' ? ratePerTon * exchangeRate : ratePerTon / exchangeRate;
    const convertedRatePerKg = rateCurrency === 'USD' ? ratePerKg * exchangeRate : ratePerKg / exchangeRate;
    const convertedRatePerMeter = rateCurrency === 'USD' ? ratePerMeter * exchangeRate : ratePerMeter / exchangeRate;
    const convertedRatePerFeet = rateCurrency === 'USD' ? ratePerFeet * exchangeRate : ratePerFeet / exchangeRate;

    const totalPrice = (
      rateUnit === 'm.ton' ? ratePerTon * lengthInTon :
        rateUnit === 'kilogram' ? ratePerKg * lengthInKg :
          rateUnit === 'meter' ? ratePerMeter * lengthInMeters :
            rateUnit === 'feet' ? ratePerFeet * lengthInFeet : 0
    );

    const convertedTotalPrice = rateCurrency === 'USD' ? totalPrice * exchangeRate : totalPrice / exchangeRate;

    setResults({
      weightPerMeterKg: kgPerMeter.toFixed(3),
      weightPerMeterTon: weightPerMeterTon.toFixed(6),
      weightPerFeetKg: weightPerFeetKg.toFixed(3),
      weightPerFeetTon: weightPerFeetTon.toFixed(6),
      lengthInMeters: lengthInMeters.toFixed(3),
      lengthInFeet: lengthInFeet.toFixed(3),
      lengthInTon: lengthInTon.toFixed(6),
      lengthInKg: lengthInKg.toFixed(3),
      ratePerTon: ratePerTon.toFixed(6),
      ratePerKg: ratePerKg.toFixed(3),
      ratePerMeter: ratePerMeter.toFixed(3),
      ratePerFeet: ratePerFeet.toFixed(3),
      convertedRatePerTon: convertedRatePerTon.toFixed(3),
      convertedRatePerKg: convertedRatePerKg.toFixed(3),
      convertedRatePerMeter: convertedRatePerMeter.toFixed(3),
      convertedRatePerFeet: convertedRatePerFeet.toFixed(3),
      totalPrice: totalPrice.toFixed(3),
      convertedTotalPrice: convertedTotalPrice.toFixed(3),
    });
  };
  const handleDownloadPDF = async () => {
    if (!printRef.current) return;

    const input = printRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("Pipe_Calculation_Result.pdf");
  };

  return (
    <div className="pipe-calculator">
      <h2>Pipe Price Calculator</h2>
      <div className="input-sectionpipe">
        <label>Select Pipe Size and STD:</label>
        <select onChange={(e) => setSelectedPipe(pipeData.find(pipe => `${pipe.size} ${pipe.sch}` === e.target.value))}>
          <option value="">Select Pipe</option>
          {Array.from(uniquePipes).map((pipe, index) => (
            <option key={index} value={pipe}>{pipe}</option>
          ))}
        </select>
      </div>

      {selectedPipe && (
        <>
          <p>Standard Weight Per Meter: {selectedPipe.kgPerMeter} kg</p>
          <div className="input-sectionpipe">
            <label>Required Pipe Length:</label>
            <input type="number" value={pipeLength} onChange={(e) => setPipeLength(e.target.value)} />
            <select value={lengthUnit} onChange={(e) => setLengthUnit(e.target.value)}>
              <option value="select">Select Unit</option>
              <option value="meter">Meter</option>
              <option value="feet">Feet</option>
            </select>
          </div>
          <div className="input-sectionpipe">
            <label>Rate Currency:</label>
            <select value={rateCurrency} onChange={(e) => setRateCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="AED">AED</option>
            </select>
          </div>
          <div className="input-sectionpipe">
            <label>Rate Unit:</label>
            <select value={rateUnit} onChange={(e) => setRateUnit(e.target.value)}>
              <option value="m.ton">M.Ton</option>
              <option value="kilogram">Kilogram</option>
              <option value="meter">Meter</option>
              <option value="feet">Feet</option>
            </select>
          </div>
          <div className="input-sectionpipe">
            <label>Rate Value:</label>
            <input type="number" value={rateValue} onChange={(e) => setRateValue(e.target.value)} />
          </div>
          <button onClick={calculateResults} className="calculate-btn">
          Calculate
        </button>
        </>
      )}

      {results && Object.keys(results).length > 0 && (
        <div className="results-sectionpipe" ref={printRef}>
          <img src="/assets/msglogo.png" alt="Company Logo" className="logo" />
          <h2>MSG Oilfield Equipment Trading LLC</h2>
          <p>Dubai industrial city Phase 1,Salih Shuaib 2,Warehouse No:J-04 Dubai,United Arab Emirates</p>
          <br></br>

          <h3>Results</h3>
          <p>Standard Weight Per Meter (Ton):<br></br><strong>  {results.weightPerMeterTon} m.ton</strong></p>
          <p>Standard Weight Per Feet (Kg):<br></br> <strong>  {results.weightPerFeetKg} kg</strong></p>
          <p>Standard Weight Per Feet (Ton):<br></br> <strong>  {results.weightPerFeetTon} m.ton</strong></p>
          <p>Required Length (Meters): <br></br> <strong> {results.lengthInMeters} meters</strong></p>
          <p>Required Length (Feet): <br></br> <strong> {results.lengthInFeet} feet</strong></p>
          <p>Required Length (Ton):<br></br><strong>   {results.lengthInTon} m.ton</strong></p>
          <p>Required Length (Kg): <br></br><strong> {results.lengthInKg} kg</strong></p>
          <p>Rate Per Ton: <br></br><strong>  {results.ratePerTon} {rateCurrency}</strong></p>
          <p>Rate Per Kg: <br></br><strong>  {results.ratePerKg} {rateCurrency}</strong></p>
          <p>Rate Per Meter: <br></br><strong>  {results.ratePerMeter} {rateCurrency}</strong></p>
          <p>Rate Per Feet:<br></br> <strong>  {results.ratePerFeet} {rateCurrency}</strong></p>
          <p>Converted Rate Per Ton: <br></br> <strong> {results.convertedRatePerTon} {rateCurrency === 'USD' ? 'AED' : 'USD'}</strong></p>
          <p>Converted Rate Per Kg: <br></br> <strong> {results.convertedRatePerKg} {rateCurrency === 'USD' ? 'AED' : 'USD'}</strong></p>
          <p>Converted Rate Per Meter:<br></br> <strong>  {results.convertedRatePerMeter} {rateCurrency === 'USD' ? 'AED' : 'USD'}</strong></p>
          <p>Converted Rate Per Feet: <br></br><strong>  {results.convertedRatePerFeet} {rateCurrency === 'USD' ? 'AED' : 'USD'}</strong></p>
          <p>Total Price: <br></br> <strong> {results.totalPrice} {rateCurrency}</strong></p>
          <p>Converted Total Price:<br></br> <strong> {results.convertedTotalPrice} {rateCurrency === 'USD' ? 'AED' : 'USD'}</strong></p>

          {results && (
            <button onClick={handleDownloadPDF} className="download-btn">
              Download PDF
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default PipeCalculator;