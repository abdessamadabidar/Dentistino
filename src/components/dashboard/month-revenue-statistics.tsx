

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
	{
		page: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		page: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		page: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		page: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		page: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		page: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		page: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];


export default function MonthRevenueStatistics() {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<AreaChart

				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="page" />
				<YAxis />
				<Tooltip />
				<Area type="monotone" dataKey="uv" stroke="#FFEBB2" fill="#FFEBB2" />
			</AreaChart>
		</ResponsiveContainer>
	);
}