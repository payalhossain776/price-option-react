
import { LineChart, Line, XAxis,  YAxis } from 'recharts';
const LineChat = () => {

    const markMathData = [
        { id: 1, name: 'alicess', math: 78, bangla: 56, english: 67 },
        { id: 2, name: 'kholasa', math: 66, bangla: 59, english: 68 },
        { id: 3, name: 'rojariyw', math: 28, bangla: 78, english: 54 },
        { id: 4, name: 'tomanotou', math: 68, bangla: 48, english: 99 },
        { id: 5, name: 'loyatomi', math: 60, bangla: 76, english: 67 },
        { id: 6, name: 'jamutumi', math: 33, bangla: 87, english: 85 },
        { id: 7, name: 'lailakuji', math: 98, bangla: 47, english: 96 },
        { id: 8, name: 'jikimarti', math: 65, bangla: 94, english: 34 },
        { id: 9, name: 'kalatimalla', math: 54, bangla: 65, english: 77 },
        { id: 10, name: 'mogliya', math: 90, bangla: 75, english: 55 },
    ]
    return (
        <div>
            <div className=''>
            <LineChart width={950} height={400} data={markMathData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke="#AF1740"></Line>
                <Line dataKey="bangla" stroke="#FADFA1"></Line>
                <Line dataKey="english" stroke="#7EACB5"></Line>
            </LineChart>
            </div>
        </div>
    );
};

export default LineChat;