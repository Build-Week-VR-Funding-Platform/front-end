import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button } from "semantic-ui-react";

import UpdatedForm from "./UpdatedForm";

function ProjectForm(){

    const [projectList, setProjectList] = useState([])
    const [newProject, SetNewProject] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('https://vr-funding-app.herokuapp.com/api/projects/1')
        .then(res => {
            console.log(res)
            SetNewProject(res.data.project)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <Form className="new-project-container">
                <h2>Create a new project with us</h2>
                <Field type = "text" name="image" placeholder="Image URL" />
                <Field type = "text" name="project_title" placeholder="Project Title" />
                <Field type = "text" name="project_type" placeholder="Project Type" />
                <Field type = "text" name="mission_statement" placeholder="Mission Statement" />
                <Field type = "text" name="project_description" placeholder="Description" />
                <Field type = "text" name="funding_amount" placeholder="Funding amount" />
                <Field type = "text" name="project_timeline" placeholder="Project Timeline" />
                <Field type = "text" name="project_assets" placeholder="Project assets" />
                <Field type = "number" name="founders_id" placeholder="Founders ID" />
                <Button color="blue" content="Submit Project!" />
                {newProject.length > 0 ? newProject.map(a=> <UpdatedForm projectList={a.project}/>) : null}
            </Form>
        </div>
    );
}

const FormikProjectForm = withFormik({
    mapPropsToValues({ image, project_title, project_type, mission_statement, project_description, funding_amount, project_timeline, project_assets, founders_id }){
        return {
            image: image || "",
            project_title: project_title || "",
            project_type: project_type || "",
            mission_statement: mission_statement|| "",
            project_description: project_description || "",
            funding_amount: funding_amount || "32,453",
            project_timeline: project_timeline || "Start 1/20/2019, Estimated finish: 2/2-/2019",
            project_assets: project_assets || "",
            founders_id: founders_id || null
        };
    },

    handleSubmit(values){
        console.log(values)
        axiosWithAuth()
        .post("https://vr-funding-app.herokuapp.com/api/projects", values)
        .then(res => {
            console.log('formsubmitres: ', res)
            // resetForm();
            // setSubmitting(false);
        })
        .catch(err => {
            console.log('FormSubmiterr: ', err);
            // setSubmitting(false);
            
        });
    } 
})(ProjectForm);

export default FormikProjectForm;