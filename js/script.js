$(function() {
    "use strict";

    var a = $('.a'),
        quarter = $('.quarter'),
        twenty = $('.twenty'),
        firstFive = $('.first-five'),
        half = $('.half'),
        firstTen = $('.first-ten'),
        to = $('.to'),
        past = $('.past');

    var one = $('.one'),
        two = $('.two'),
        three = $('.three'),
        four = $('.four'),
        five = $('.five'),
        six = $('.six'),
        seven = $('.seven'),
        eight = $('.eight'),
        nine = $('.nine'),
        ten = $('.ten'),
        eleven = $('.eleven'),
        twelve = $('.twelve'),
        error = $('.error');

    //IIFE to start the clock
    (function startTime() {
        //new date object
        var today = new Date();
        //get the current hour and minute
        var h = today.getHours();
        var m = today.getMinutes();

        //call the
        checkTimeHour(h, m);
        checkTimeMin(m);

        //Call startTime() after half a second
        setTimeout(startTime, 5000);
    })();

    function checkTimeHour(hour, min) {
        if (min > 31) {
            hour = hour + 1;
        }

        if (hour > 12) {
            hour = hour - 12;
        }

        switch (hour) {
            case 0:
                hourReset();
                twelveSwitch();
                break;
            case 1:
                hourReset();
                oneSwitch();
                break;
            case 2:
                hourReset();
                twoSwitch();
                break;
            case 3:
                hourReset();
                threeSwitch();
                break;
            case 4:
                hourReset();
                fourSwitch();
                break;
            case 5:
                hourReset();
                fiveSwitch();
                break;
            case 6:
                hourReset();
                sixSwitch();
                break;
            case 7:
                hourReset();
                sevenSwitch();
                break;
            case 8:
                hourReset();
                eightSwitch();
                break;
            case 9:
                hourReset();
                nineSwitch();
                break;
            case 10:
                hourReset();
                tenSwitch();
                break;
            case 11:
                hourReset();
                elevenSwitch();
                break;
            case 12:
                hourReset();
                twelveSwitch();
                break;
            default:
                hourReset();
                error.innerText('There was an error. Please try again later. Make sure that you have JavaScript enabled in your browser.');
                break;
        }
    }

    function checkTimeMin(min) {
        if (min >= 2 && min <= 7) {
            minReset();
            firstFiveSwitch();
            pastSwitch();
        } else if (min >= 8 && min <= 12) {
            minReset();
            firstTenSwitch();
            pastSwitch();
        } else if (min >= 13 && min <= 17) {
            minReset();
            aSwitch();
            quarterSwitch();
            pastSwitch();
        } else if (min >= 18 && min <= 22) {
            minReset();
            twentySwitch();
            pastSwitch();
        } else if (min >= 23 && min <= 27) {
            minReset();
            twentySwitch();
            firstFiveSwitch();
            pastSwitch();
        } else if (min >= 28 && min <= 32) {
            minReset();
            halfSwitch();
            pastSwitch();
        } else if (min >= 33 && min <= 37) {
            minReset();
            twentySwitch();
            firstFiveSwitch();
            toSwitch();
        } else if (min >= 38 && min <= 42) {
            minReset();
            twentySwitch();
            toSwitch();
        } else if (min >= 43 && min <= 47) {
            minReset();
            aSwitch();
            quarterSwitch();
            toSwitch();
        } else if (min >= 48 && min <= 52) {
            minReset();
            firstTenSwitch();
            toSwitch();
        } else if (min >= 53 && min <= 57) {
            minReset();
            firstFiveSwitch();
            toSwitch();
        } else {
            minReset();
        }
    }

    function hourReset() {
        one.removeClass('on');
        two.removeClass('on');
        three.removeClass('on');
        four.removeClass('on');
        five.removeClass('on');
        six.removeClass('on');
        seven.removeClass('on');
        eight.removeClass('on');
        nine.removeClass('on');
        ten.removeClass('on');
        eleven.removeClass('on');
        twelve.removeClass('on');
    }

    function oneSwitch() {
        one.addClass('on');
    }

    function twoSwitch() {
        two.addClass('on');
    }

    function threeSwitch() {
        three.addClass('on');
    }

    function fourSwitch() {
        four.addClass('on');
    }

    function fiveSwitch() {
        five.addClass('on');
    }

    function sixSwitch() {
        six.addClass('on');
    }

    function sevenSwitch() {
        seven.addClass('on');
    }

    function eightSwitch() {
        eight.addClass('on');
    }

    function nineSwitch() {
        nine.addClass('on');
    }

    function tenSwitch() {
        ten.addClass('on');
    }

    function elevenSwitch() {
        eleven.addClass('on');
    }

    function twelveSwitch() {
        twelve.addClass('on');
    }

    function minReset() {
        a.removeClass('on');
        quarter.removeClass('on');
        twenty.removeClass('on');
        firstFive.removeClass('on');
        half.removeClass('on');
        firstTen.removeClass('on');
        to.removeClass('on');
        past.removeClass('on');
    }

    function aSwitch() {
        a.addClass('on');
    }

    function quarterSwitch() {
        quarter.addClass('on');
    }

    function twentySwitch() {
        twenty.addClass('on');
    }

    function firstFiveSwitch() {
        firstFive.addClass('on');
    }

    function halfSwitch() {
        half.addClass('on');
    }

    function firstTenSwitch() {
        firstTen.addClass('on');
    }

    function toSwitch() {
        to.addClass('on');
    }

    function pastSwitch() {
        past.addClass('on');
    }
});
