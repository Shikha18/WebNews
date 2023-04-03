import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style.module.scss';

const Api = () => {

    const [obj, setObj] = useState('');

    const getData = () => {
        const API_KEY =  `f6d07a99d1ae4c7a90810e3ce5792e3a`;
        const url = `https://newsapi.org/v2/everything?q=apple&from=2023-03-21&to=2023-03-21&sortBy=popularity&apiKey=${API_KEY}`
        axios.get(url, { mode: "cors" }).then(res => {
            setObj(res.data.articles);
        }).catch((error) => {
            console.log("Error", error);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(obj, setObj);

    return (
        <div className={style.container}>
            {
                Array.isArray(obj) ? obj?.map(item => {
                    const {title, author, description, publishedAt, url, urlToImage, content} = item;
                    <div>
                        <div>
                            SHikh
                            <img src={urlToImage} />
                        </div>
                        <div>
                            <h4>{title}</h4>
                            <h5>Written by: {author}</h5>
                            <p>{content}</p>
                            <p>{description}</p>
                            <p>Published At: {publishedAt}</p>
                            {/* Can achieve this by react-router also */}
                            <a href={url} target="_blank">Click here for Full news</a>

                        </div>
                    </div>
}) : []
            }
        </div>
    )
}

export default Api;
