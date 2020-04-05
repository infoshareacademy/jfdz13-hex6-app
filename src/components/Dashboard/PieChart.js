import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import styles from "./Dashboard.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const data = [
  { name: "British", value: 35 },
  { name: "Germans", value: 30 },
  { name: "Scandinavians", value: 9 },
  { name: "Russians", value: 6 },
  { name: "Others", value: 20 }
];

const renderActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} style={{ fontSize: "10px", fontWeight: "600" }}>
      {payload.name} {`${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const COLORS = ["#02c9da", "#00C49F", "#fcda13", "#626262", "#f06292"];

export default class MyPieChart extends PureComponent {
  state = {
    activeIndex: 0
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    return (
      <Card className={styles.chartContainer} variant="outlined">
        <CardContent style={{ padding: "0" }}>
          <p className={styles.chartTitle}> People from all over the Europe <br></br> visit 3City!</p>
          <p className={styles.chartDescription}>
          data from 2019
          </p>
        </CardContent>
        <PieChart width={180} height={180}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={80}
            cy={80}
            innerRadius={60}
            outerRadius={80}
            fill="#02c9da"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </Card>
    );
  }
}
