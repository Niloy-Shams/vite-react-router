

const Calender = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <iframe id="g2hFrame" title="islamic-calendar" className="my-auto h-80" src="https://www.islamicfinder.org/islamic-calendar/widgetGregorian?type=Gregorian"> </iframe>
        </div>
    );
};

export default Calender;