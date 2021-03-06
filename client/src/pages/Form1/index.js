import React from 'react';
import Form from "../../components/Form";
import { Input, FormBtn, Text } from "../../components/FormComponents";
import { useHistory } from "react-router-dom";

function Form1({ form, handleChange, published }) {
    let history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()
        history.push("/details");
    }

    return (
        <Form>
            <Input
                htmlFor={"github"}
                label={"github username"}
                type={"text"}
                name={"username"}
                handleChange={handleChange}
                value={form.username || ""} />
            <Input
                htmlFor={"email"}
                label={"email"}
                type={"text"}
                name="email"
                handleChange={handleChange}
                value={form.email || ""} />
            <Input
                htmlFor={"repo"}
                label={"repo url"}
                type={"text"}
                name="repo"
                handleChange={handleChange}
                value={form.repo || ""} />

            {
                published.published === "Yes" ?
                    <>
                        <Input
                            htmlFor={"service"}
                            label={"site published with"}
                            type={"text"}
                            name="service"
                            handleChange={handleChange}
                            value={form.service || ""} />
                        <Input
                            htmlFor={"site"}
                            label={"site url"}
                            type={"text"}
                            name="site"
                            handleChange={handleChange}
                            value={form.site || ""} />
                    </>
                    : null
            }
            <Input
                htmlFor={"title"}
                label={"project title"}
                type={"text"}
                name="title"
                handleChange={handleChange}
                value={form.title || ""} />
            <Text
                htmlFor={"description"}
                label={"project description"}
                type={"text"}
                rows={"7"}
                name={"description"}
                handleChange={handleChange}
                value={form.description || ""} />
            <FormBtn onClick={handleSubmit}>Next</FormBtn>
        </Form>
    )
}

export default Form1