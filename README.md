# MarketLens — Stock Research MVP

Stock market research dashboard built with JavaScript, Node.js, SVG charts, and explainable indicators.

## Features
- Historical price chart and ticker search
- Watchlists and threshold alerts (localStorage; browser tab must remain open)
- RSI(14), 20/50-day moving averages and volatility
- Twelve Data market prices with a 120-second API cache (requires an API key)
- Optional LLM-generated research commentary (requires an OpenAI API key)
- Clearly-labelled synthetic demo prices without API credentials
- Five automated tests

## Local development
Requires Node.js 20+.

```bash
npm start
npm test
```

Open http://localhost:3000.

Copy `.env.example` to `.env`, insert `TWELVE_DATA_API_KEY`, and start with `node --env-file=.env server.js` to enable provider data. Optional `OPENAI_API_KEY` enables generated commentary.

## Limitations
This is a portfolio prototype, not investment advice or a trading platform. Demo values are **not actual prices**. Provider updates are polled, not guaranteed real time. Alerts are browser-only, not persistent background notifications. No authentication, brokerage orders, or backend portfolio database is implemented. Prices may be delayed and subject to licensing.

## Roadmap
PostgreSQL and accounts; persistent alerts; WebSocket market streams; news and filings citations; backtesting and deployment CI.