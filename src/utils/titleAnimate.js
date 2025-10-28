export const context = {
    title: null,
    setTitle: null,
    isExpanding: null,
    setIsExpanding: null
};

// data var
var titleList = ["Dhanika Weerasekara", "@dhakiweere", "dhakiweere.space"];
var loopInterval = 100;
var loopPauseInterval = 2000;

// control var
var currentTitle = 0;
var isTitleLoopRunning = false;
var titleTimer = null;

export function titleChangeJob() {
    var fullText = titleList[currentTitle];
    var { title, setTitle, isExpanding, setIsExpanding, timer } = context;

    if (!isTitleLoopRunning) {
        titleTimer = setInterval(titleChangeJob, loopInterval);
        isTitleLoopRunning = true;
    }


    if (isExpanding) {
        // Adding characters
        if (title.length < fullText.length) {
            setTitle(fullText.slice(0, title.length + 1));
        } else {
            // Reached the end, start removing
            setIsExpanding(false);
            // timer pause
            clearInterval(titleTimer)
            setTimeout(()=>{
                titleTimer = setInterval(titleChangeJob, 100);
            }, loopPauseInterval);
        }

    } else {
        // Removing characters
        if (title.length > 0) {
            setTitle(title.slice(0, -1));

        } else {
            // Reached the start, start adding again
            setIsExpanding(true);
            if (currentTitle < 2) {
                currentTitle++;
            } else {
                currentTitle = 0;
            }
        }
    }
}