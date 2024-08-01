import { useState, useEffect } from "react";
import localeDa from "dayjs/locale/da";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import config from "../public/config.json5";

function App() {
    const { pages } = config;
    const [selectedFrame, setSelectedFrame] = useState(pages[0]);
    const meetings = getFakeMeetings();

    function getFakeMeetings() {
        const meetings = [];

        let now = dayjs();
        now = now.second(0)
        const quarter = Math.ceil(now.minute() / 15);
        now = now.minute(quarter * 15);

        for (let i = 0; i < 5; i++) {
            meetings.push({
                "id": "event-" + i,
                "title": "Testmøde " + i,
                "startTime": dayjs(now).add(15 * i, "minutes").unix(),
                "endTime": dayjs(now).add(15 * i + 15, "minutes").unix(),
                "resourceTitle": "Testlokale " + i,
            });
        }

        return meetings;
    }

    function changeFrame(page) {
        setSelectedFrame(page);
    }

    useEffect(() => {
        dayjs.extend(localizedFormat);
    }, []);

    const renderTimeOfDay = (unixTimestamp) => {
        return dayjs(unixTimestamp * 1000)
            .locale(localeDa)
            .format("HH:mm");
    };

    const renderMeetings = (events) => {
        const now = dayjs();
        const elements = [];

        if (events.length > 0) {
            events
                .filter(
                    (e) => e.endTime > now.unix() && e.endTime <= now.endOf("day").unix()
                )
                .forEach((event) => {
                    if (elements.length < 3) {
                        elements.push(
                            <div
                                key={event.id}
                                className={
                                    elements.length === 0
                                        ? "calendar-content-item now"
                                        : "calendar-content-item next"
                                }
                            >
                                <div className="meta">
                                    {renderTimeOfDay(event.startTime)}
                                    {" - "}
                                    {renderTimeOfDay(event.endTime)}
                                </div>
                                {event.title || "no title"}
                            </div>
                        );
                    }
                });
        }

        return elements.concat();
    };

    useEffect(() => {
        const type = selectedFrame?.type.toLowerCase();
        let element;

        switch (type) {
            case 'audio':
            case 'video':
                element = document.getElementById('media-element');
                element.play();
                break;
            case 'iframe':
                break;
        }

    }, [selectedFrame]);

    return (
        <div className="welcome-container">
            <h1 className="header text-7xl text-center my-8 font-bold">
                {selectedFrame?.pageTitle ?? ' '}
            </h1>
            <section className="main">
                {selectedFrame?.type.toLowerCase() === "audio" && (
                    <audio controls id="media-element" className="audio-element"
                           style={{backgroundImage: selectedFrame?.poster ? `url(${selectedFrame?.poster})` : ''}}>
                        <source src={selectedFrame.url} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                )}
                {selectedFrame?.type.toLowerCase() === "iframe" && (
                    <iframe src={selectedFrame.url} width="100%" id="iframe-element"/>
                )}
                {selectedFrame?.type.toLowerCase() === "video" && (
                    <video width="100%" controls id="media-element" className="video-element">
                        <source src={selectedFrame.url} type="video/mp4"/>
                        Your browser does not support the video element.
                    </video>
                )}
                {selectedFrame?.type.toLowerCase() === "calendar" && meetings?.length > 0 && (
                    <div className="calendar-wrapper">
                        <div className="calendar-content">
                            {meetings?.length > 0 && renderMeetings(meetings)}
                        </div>
                    </div>
                )}
            </section>
            {pages && (
                <>
                    {pages.map((page) => {
                        const {id, buttonText} = page;
                        return (
                            <div key={id} className="button">
                                <button
                                    type="button"
                                    className="font-bold rounded"
                                    onClick={() => changeFrame(page)}
                                >
                                    {buttonText}
                                </button>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default App;
