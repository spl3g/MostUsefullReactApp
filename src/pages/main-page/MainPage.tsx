import { NewsListData, type News } from "../../types/News";
import { useEffect, useState } from "react";
import { getNewsListAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../../store/news-slice";
import { RootState } from "../../store/store";
import { URLs } from "../../const";

const MainPage = function () {
    const selectNews = (state: RootState) => state.news.news;
    const dispatch = useDispatch();
    const news = useSelector(selectNews);

    useEffect(() => {
        if (news.length === 0) {
            fetch(URLs.news)
                .then((response) => response.json())
                .then((data) => {
                    dispatch(setNews(data));
                })
                .catch((error) => console.error("Error fetching news:", error));
        }
    }, [dispatch, news]);

    return (
        <>
            {news ? (
                news.map((news) => (
                    <NewsListData
                        key={news.name}
                        name={news.name}
                        description={news.description}
                        createdAt={new Date(news.createdAt).toDateString()}
                    />
                ))
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MainPage;
