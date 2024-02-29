import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ data }) {

    let resultsData = calculateInvestmentResults(data)

    const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

    return (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment value</th>
              <th>Invest (Year)</th>
              <th>Total interest</th>
              <th>Invested capital</th>
            </tr>
          </thead>
    
          <tbody>
            {resultsData.map((yearData) => {
              const totalIntrest =
                yearData.valueEndOfYear -
                yearData.annualInvestment * yearData.year -
                initialInvestment;
              const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;
    
              return (
                <tr key={yearData.year}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>{formatter.format(totalIntrest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
  }
  