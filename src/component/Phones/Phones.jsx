import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Audio, CirclesWithBar } from 'react-loader-spinner'

const Phones = () => {

    const [phones, setphones] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //  fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //  .then(res => res.json())
        //  .then(data=> setphones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data
                const phonefakedata = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setphones(phonefakedata)
                setLoading(false)
            })

    }, [])

    return (
        <div>
           
            {loading && <Audio
                height="100"
                width="100"
                color="#F39E60"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />}
            <CirclesWithBar
                height="100"
                width="100"
                color="#944E63"
                outerCircleColor="#CAA6A6"
                innerCircleColor="#B47B84"
                barColor="#944E63"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <h2 className="text-5xl my-3">phones:{phones.length}</h2>


            <BarChart
                width={1020}
                height={300}
                data={phones}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#F72C5B" activeBar={<Rectangle fill="pink" stroke="#F72C5B" />} />
                <Bar dataKey="" fill="#50B498" activeBar={<Rectangle fill="#DEF9C4" stroke="#50B498" />} />
            </BarChart>
        </div>
    );
};

export default Phones;