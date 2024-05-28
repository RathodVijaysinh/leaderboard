// src/Leaderboard.js
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Leaderboard.css';

const data = [
  { rank: 1, name: "Selling with re entr", calmar: 3.96, profit: 381845, dailyProfit: 319.54, winRate: 0.65, price: "-" },
  { rank: 2, name: "strategy_name", calmar: 3.62, profit: 268872.5, dailyProfit: 216.31, winRate: 0.64, price: "500" },
  { rank: 3, name: "Based on premium and", calmar: 3.42, profit: 255425, dailyProfit: 208.51, winRate: 0.64, price: "-" },
  { rank: 4, name: "strategy_name", calmar: 3.22, profit: 370845, dailyProfit: 303.47, winRate: 0.65, price: "-" },
  { rank: 5, name: "strategy_name", calmar: 3.22, profit: 370845, dailyProfit: 303.47, winRate: 0.65, price: "-" },
  { rank: 6, name: "Based on premium wit", calmar: 3.01, profit: 135980, dailyProfit: 185.77, winRate: 0.49, price: "-" },
  { rank: 7, name: "strategy_name", calmar: 2.76, profit: 267867.5, dailyProfit: 218.49, winRate: 0.6, price: "-" },
  { rank: 8, name: "Wait and trade_Save", calmar: 2.62, profit: 178252.5, dailyProfit: 161.9, winRate: 0.63, price: "-" },
  { rank: 9, name: "iron condor", calmar: 2.44, profit: 176420, dailyProfit: 137.51, winRate: 0.65, price: "-" },
  { rank: 10, name: "strategy_name", calmar: 2.04, profit: 244555, dailyProfit: 198.66, winRate: 0.62, price: "-" }
];

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h1>Vibrant Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win %(Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <TransitionGroup component="tbody">
          {data.map((row) => (
            <CSSTransition key={row.rank} timeout={500} classNames="fade-slide-smoke">
              <tr>
                <td>{row.rank}</td>
                <td>{row.name}</td>
                <td>{row.calmar}</td>
                <td>{row.profit}</td>
                <td>{row.dailyProfit}</td>
                <td>{row.winRate}</td>
                <td>{row.price}</td>
                <td>
                  {row.price === "-" ? (
                    <a href="#" className="view-btn">View</a>
                  ) : (
                    <a href="#" className="buy-btn">Buy</a>
                  )}
                </td>
              </tr>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </table>
    </div>
  );
};

export default Leaderboard;
