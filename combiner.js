// This program is designed to take two lists and create combinations of them in different ways.//
// A simple junction of both lists, a 1:1 grouping of lists of the same size, and a list of lists that has every possible combination of two lists of any size. //

function combiner(type,list1,list2) {

    // Simply combines both lists //

    if (type == 1) {

        output = list1.concat(list2);

    }

    // Makes a list of 1:1 pairs of items from the lists of same length. //

    else if (type == 2) {

        if (list1.length != list2.length) {

            print('Error: Lists not equal size.');

        }

        else if (list1.length == list2.length) {

            max = list1.length - 1;

            n = 0;

            output = [];

            while (n < max) {

                output = output.push([list1[n],list2[n]]);

                n = n + 1;

            }

        }

    }

    // Makes a list of every possible combination of lists. //

    else if (type == 3) {

        maxl1 = list1.length - 1;

        maxl2 = list2.length - 1;

        n = 0

        output = [];

        while (n < maxl1) {

            m = 0

            while (m < maxl2) {

                output = output.push([list1[n],list2[m]]);

                m = m + 1;

            }

            n = n + 1;

        }

    }

}

console.log(output)