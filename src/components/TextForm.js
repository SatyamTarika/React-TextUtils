import React from 'react'
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function TextForm() {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="exampleText">
                        Text Area
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
            </Form>
        </div>
    )
}
