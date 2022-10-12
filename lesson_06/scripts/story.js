/*
This could also be loaded from an external src using fetch():

fetch("example.com/story.json")
    .then(res=>res.json())
    .then(mainStory => renderStory(mainStory))
*/

const mainStory = {
    text: ["You started the CSE121b Choose Your Own Adventure game!", "You begin on a road, with a fork immediately in front of you.", "The <strong>left</strong> path seems to head toward a <strong>forest</strong>, and the fall leaves reflect the sun to make the path look red and orange.", "The <strong>right</strong> path heads toward a large <strong>mountain</strong> with snow at its peak. There aren't any trees growing anywhere on it."],
    options: {
        "Go left.": {
            text: [
                "You begin hiking down the left path, into the forest.",
                "The leaves crunch beneath your feet, and you find the orange sunset blending into the fall colors to be quite beautiful.",
                "After some time, you begin to realize you aren't the only one making a crunching noise.",
                "You suddenly freeze, but whoever (or whatever) doesn't stop fast enough. You are certain <strong>you are being followed</strong> by <em>something</em>."
            ], options: {
                "Get out of there as fast as possible!": {
                    text: [
                        "You immediately break into a run!",
                        "...<br/>...<br/>...<br/>...",
                        "You quickly outpace the noise and leave the forest alltogether, never looking back.",
                        "At least you have a good halloween story to tell now!",
                        "<span class='end end-good'>The End.</span>"
                    ]
                },
                "Look to see what is making the noise.": {
                    text: [
                        "You <em>slowly</em> turn around...",
                        "...<br/>...<br/>...<br/>...",
                        "...and gasp! It's your best friend! More surprising than that, they're dressed in a costume?",
                        '"Did you forget? The halloween party starts soon! We have to get there in time!"',
                        "How could you forget today was Halloween?",
                        "<br/>",
                        "You head to the mountain, into a cave, and what do you know?",
                        "Every kind of monster you can think of is there! Dancing?",
                        "Then you hear the song playing: it's 'Monster Mash'",
                        "<span class='end end-good'>The End.</span>"
                    ]
                }
            }
        },
        "Go right.": {
            text: [
                "You start walking towards the mountain.",
                "As you get closer, you notice a <strong>cave</strong> at the base of the mountain.",
                "Once you are a the base of the cave, you faintly hear sounds.",
                "Low, <em>booming</em> sounds.",
                "A steady beat, rippling out of the cave.",
                "A story you once heard immediately comes to mind:",
                '<em>"The end comes soon.</em>',
                '"<em>We hear drums, drums in the deep.</em>',
                '"<em>They are coming.</em>'
            ], options: {
                "I know what that means. I'm outta here!": {
                    text: [
                        "You turn and quietly sneak away from the cave.",
                        "Away, back along the path.",
                        "Away, all the way back to your house.",
                        "While still worried, you should be safe here. You drift off into an uneasy sleep.",
                        "<br/>",
                        "Until you awake to the drums.",
                        "<span class='end end-bad'>The End.</span>"
                    ]
                },
                "I'm curious what's going on. Explore the cave.": {
                    text: [
                        "You quietly sneak into the cave.",
                        "<br/>",
                        "As you go deeper and deeper into the mountain, the sounds only get louder.",
                        "However, there seem to be other noises as well. Almost... a melody?",
                        "You begin to see light just a little bit farther down. You could almost swear there are sounds of voices mixed in with the haunting noises.",
                        "<br/>",
                        "The cave ends in a large opening into a cavern. You peek your head around the corner and immediately pull back. The cavern is full of monsters!",
                        "Monsters and... music?",
                        "Yes you're sure of it now.",
                        "The booms are the bass of a song.",
                        "Above your head, something flutters. A sign. It reads 'Happy Halloween!'",
                        "You recognize the song in a flash. It's 'Monster Mash'.",
                        "<span class='end end-good'>The End.</span>"
                    ]
                }
            }
        }

    }
}
