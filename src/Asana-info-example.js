import React from 'react'

const AsanaInfoExample = () => {
    const mainDivStyles = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
    }
    const h2Styles = {
        width: "100%",
        textAlign: "center",
        padding: "10px 0",
        backgroundColor: "black",
        color: "white",
    }
    const innerDivStyles = {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
    }
    const stepStyles = {
        width: "100%",
        borderBottom: "1px solid black",
        margin: "0",
        padding: "10px 20px",
        textAlign: "justify",
        maxFontSize: "1em",
    }
    const imageStyles = {
        padding: "10px",
        maxWidth: "90%",
    }
    return (
        <div style={mainDivStyles}>
            <h2 style={h2Styles}>Surya Namaskar</h2>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 1 : Both feet touching each other, both hands joined at the center of the chest as in prayer position back and neck straight and look straight.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234372_suryanamaskar_1.jpg' alt='namaskar-1'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 2 : Continuing from the first position take your hands straight up above your head and bend slightly backwards to stretch your back. Keep your hands in prayer position (without bending your elbows). Keep your neck between your arms and looking upwards bend slightly backwards from the waist.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234362_suryanamaskar_2.jpg' alt='namaskar-2'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 3 : Continuing from 2nd position take your hands from above your head bending in the front and place your hands beside your feet on both sides. Keep your knees straight and try to touch the head to your knees.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234351_suryanamaskar_3.jpg' alt='namaskar-3'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 4 : From the 3rd position start sitting down and take one leg backwards in full stretching position, your hands resting on the ground on either sides of the front leg. The other leg should be bent at the knee. Put the chest weight on the front knee, your eyes should be looking slightly upwards.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234340_suryanamaskar_4.jpg' alt='namaskar-4'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 5 : Now slowly take the second leg back and beside the first. Keep the legs in line with the knees. The whole body weight should rest on the palms and toes. The foot, waist and head should be in a straight line. Look ahead towards the ground (This is also called Chaturang Dandasan because the body rests on the toes and palms)</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234326_suryanamaskar_5.jpg' alt='namaskar-5'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 6 : Lower the chest towards the ground bending both arms at the elbows. The following eight organs should touch the ground, forehead, chest, both palms, both knees and both toes. (Because eight body parts touch the ground it is called Ashtangasan)</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234315_suryanamaskar_6.jpg' alt='namaskar-6'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 7 : Now lift your body above the waist, bending it slightly backwards and looking backwards. Make sure your legs and thighs are touching the ground and your back is in a semi- circular position.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234298_suryanamaskar_7.jpg' alt='namaskar-7'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 8 : Now lift your waist upwards and arms fully stretched with hands and legs resting on the ground, try to touch the chin to the chest.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234282_suryanamaskar_8.jpg' alt='namaskar-8'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 9 : Same as the 4th position with the opposite leg behind.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234270_suryanamaskar_9.jpg' alt='namaskar-9'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 10 : Same as that in the 3rd position.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234256_suryanamaskar_10.jpg' alt='namaskar-10'></img>
            </div>
            <div style={innerDivStyles}>
                <p style={stepStyles}>Step 11 : After that slowly come back to Position 1. Now one Surya Namaskar is over. Everyday do at least twelve such Surya Namaskars.</p>
                <img style={imageStyles} src='https://www.hindujagruti.org/hinduism-for-kids/wp-content/uploads/sites/3/2015/01/1330234372_suryanamaskar_1.jpg' alt='namaskar-11'></img>
            </div>
        </div>
  )
}

export default AsanaInfoExample
