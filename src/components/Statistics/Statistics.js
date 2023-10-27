

export const Statistics = ({ good, bad, neutral, total, percent }) => (
    <div>
    <p>Good: {good}</p>
    <p>Bad: {bad}</p>
    <p>Neutral: {neutral}</p>
    <p>Total: {total}</p>
    <p>Percent: {percent}%</p>
    </div>
)