import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './App.css';
import { AiFillInfoCircle } from 'react-icons/ai';
import { AiFillFilter } from 'react-icons/ai';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      },
    };

    this.state2 = {

      series: [{
        name: "SAMPLE A",
        data: [
          [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
      }, {
        name: "SAMPLE B",
        data: [
          [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
      }, {
        name: "SAMPLE C",
        data: [
          [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
      }],
      options: {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7
        }
      },
    };
  }

  render() {
    return (
      <div className="App-back">
        <body className="App-init">
        </body>
        <body>
          <body className="App-perimetro-filtro">
            <p className="App-palavra-filtrar">
              <footer className="App-filtro-icon">
                <AiFillFilter />
              </footer>
              Filtrar
            </p>
          </body>
          <p className="App-palavra-dashboard">
            Dashboard
          </p>
          <p className="App-palavra-desafio">
            Desafio Técnico Frontend
          </p>
          <div className="App-perimetro-barras">
            <p className="App-palavra-barras">
              Barras
            </p>
            <footer className="App-info-icon-barras">
              <AiFillInfoCircle />
            </footer>
            <div className="App-perimetro-grafico-barras">
              <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={603} height={290} />
            </div>
          </div>
          <div className="App-perimetro-scatter">
            <p className="App-palavra-scatter">
              Scatter
            </p>
            <footer className="App-info-icon-scatter">
              <AiFillInfoCircle />
            </footer>
            <div className="App-perimetro-grafico-scatter">
              <ReactApexChart options={this.state2.options} series={this.state2.series} type="scatter" width={579} height={297} />
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
