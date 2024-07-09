import dayjs from "dayjs";
export default [
    {
      id: "uniqueEvent0",
      title: "Et møde",
      startTime: dayjs()
        .subtract(1, "day")
        .add(1, "hour")
        .add(30, "minutes")
        .unix(),
      endTime: dayjs().add(2, "hour").unix(),
      resourceTitle: "Det tomme rum",
      resourceId: "M0",
    },
    {
      id: "uniqueEvent1",
      title: "Et andet møde",
      startTime: dayjs().add(1, "hour").add(30, "minutes").unix(),
      endTime: dayjs().add(2, "hour").unix(),
      resourceTitle: "Det første rum",
      resourceId: "M1",
    },
    {
      id: "uniqueEvent51",
      title: "Tea Tomorrow",
      startTime: dayjs().add(1, "hour").add(1, "day").unix(),
      endTime: dayjs().add(2, "hour").add(1, "day").unix(),
      resourceTitle: null,
      resourceId: "M4",
    },
    {
      id: "uniqueEvent2",
      startTime: dayjs().add(2, "hour").unix(),
      endTime: dayjs().add(3, "hour").unix(),
      resourceTitle: "Det andet rum",
      resourceId: "M2",
    },
    {
      id: "uniqueEvent3",
      title: "Coffee",
      startTime: dayjs().add(3, "hour").add(15, "minutes").unix(),
      endTime: dayjs().add(4, "hour").unix(),
      resourceTitle: "Det tredje rum",
      resourceId: "M3",
    },
    {
      id: "uniqueEvent4",
      title: "Tea",
      startTime: dayjs().add(1, "hour").add(1, "day").unix(),
      endTime: dayjs().add(2, "hour").add(1, "day").unix(),
      resourceTitle: null,
      resourceId: "M4",
    },
    {
      id: "uniqueEvent5",
      title: "Tea",
      startTime: dayjs().add(1, "hour").add(1, "day").unix(),
      endTime: dayjs().add(2, "hour").add(1, "day").unix(),
      resourceTitle: null,
      resourceId: "M4",
    },
    {
      id: "uniqueEvent6",
      title: "Tea",
      startTime: dayjs().add(3, "hour").add(3, "day").unix(),
      endTime: dayjs().add(4, "hour").add(3, "day").unix(),
      resourceTitle: null,
      resourceId: "M4",
    },
    {
      id: "uniqueEvent7",
      title: "Tea",
      startTime: dayjs().add(2, "hour").add(6, "day").unix(),
      endTime: dayjs().add(3, "hour").add(6, "day").unix(),
      resourceTitle: null,
      resourceId: "M4",
    },
  ];