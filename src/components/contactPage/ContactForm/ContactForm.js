import React from "react";
import styled from "styled-components";

const Wrapper = styled.form`
    box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
    padding: 2rem;
    margin-bottom: 2rem;

    input {
        max-width: 100%;
        height: 100%;
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        outline: none;
        border: 1px solid #444;
        transition: all 0.4s ease;

        &:hover,
        &:focus {
            border: 1px solid var(--main-color);
        }
    }
`;

const Contacts = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 100%;
    height: auto;
    div {
        display: flex;
        flex-direction: column;
        width: calc(50% - 2rem);
        margin-bottom: 1rem;
        padding: 0 0.5rem 0.5rem;
    }
`;

const Subject = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0.5rem 1.5rem;
    input {
        max-width: 100%;
    }
`;

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0.5rem 1.5rem;
    textarea {
        font-size: 1rem;
        padding: 0.5rem;
        outline: none;
        border-radius: 5px;

        &:focus {
            border: 1px solid var(--main-color);
        }
    }
`;

const Button = styled.div`
    text-align: center;
    button {
        background: var(--hero-color);
        border: 0;
        border-radius: 5px;
        padding: 0.625rem 1.5rem;
        font-size: 1rem;
        color: #fff;
        transition: all 0.4s ease;

        &:hover {
            background-color: var(--main-color);
        }
    }
`;

const ContactInfo = () => {
    return (
        <Wrapper>
            <Contacts>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input id="name" name="name" type="text" required />
                </div>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input id="email" name="email" type="text" required />
                </div>
            </Contacts>
            <Subject>
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required />
            </Subject>
            <TextArea>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={10} />
            </TextArea>
            <Button>
                <button>Send Message</button>
            </Button>
        </Wrapper>
    );
};

export default ContactInfo;
