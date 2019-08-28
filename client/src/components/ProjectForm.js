import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from "../utils/axiosWithAuth";

function ProjectForm(){

    return(
        <div>
            <Form>
                <Field type = "text" name="image" placeholder="Image URL" />
                <Field type = "text" name="project_title" placeholder="Project Title" />
                <Field type = "text" name="project_type" placeholder="Project Type" />
                <Field type = "text" name="mission_statement" placeholder="Mission Statement" />
                <Field type = "text" name="project_description" placeholder="Description" />
                <Field type = "text" name="funding_amount" placeholder="Funding amount" />
                <Field type = "text" name="project_timeline" placeholder="Project Timeline" />
                <Field type = "text" name="project_assets" placeholder="Project assets" />
                <Field type = "number" name="founders_id" placeholder="Founders ID" />
                <button>Submit</button>
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
            founders_id: founders_id || 1
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