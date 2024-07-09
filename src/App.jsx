import { useState, useEffect } from "react";
import config from "../public/config.json5";
import localeDa from "dayjs/locale/da";
import dayjs from "dayjs";
import meetings from "../os2display-reponse-meetings";

import localizedFormat from "dayjs/plugin/localizedFormat";

function App() {
  const { pages } = config;
  const [selectedFrame, setSelectedFrame] = useState(pages[0]);
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

  const renderSingle = (calendarEventsToRender) => {
    const now = dayjs();
    const elements = [];

    if (calendarEventsToRender.length > 0) {
      calendarEventsToRender
        .filter(
          (e) => e.endTime > now.unix() && e.endTime <= now.endOf("day").unix()
        )
        // Stolen from os2display :)
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

  return (
    <>
      <div className="welcome-container relative pb-fluid-lg bg-thd-color-violet-20 relative pt-fluid-lg ">
        {selectedFrame?.pageTitle && (
          <h1 className="header text-7xl  text-center my-8 font-bold">
            {selectedFrame?.pageTitle}
          </h1>
        )}
        <section className="main">
          {selectedFrame?.type.toLowerCase() === "image" && (
            <img src={selectedFrame.url} alt={selectedFrame.alt}></img>
          )}
          {selectedFrame?.type.toLowerCase() === "iframe" && (
            <iframe src={selectedFrame.url} className="" width="100%"></iframe>
          )}
          {selectedFrame?.type.toLowerCase() === "video" && (
            <video autoPlay width="100%" height="100%" muted={false}>
              <source key={selectedFrame.url} src={selectedFrame.url} />
            </video>
          )}
          {selectedFrame?.type.toLowerCase() === "calendar" && (
            <div className="calendar-wrapper">
              <div className="calendar-content">
                {meetings?.length > 0 && renderSingle(meetings)}
              </div>
            </div>
          )}
        </section>
        {pages && (
          <>
            {pages.map((page) => {
              const { id, buttonText } = page;
              return (
                <div key={id} className="button">
                  <button
                    type="button"
                    className="text-dark-800 font-bold py-2 px-4 border rounded shadow"
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
    </>
  );
}

export default App;
