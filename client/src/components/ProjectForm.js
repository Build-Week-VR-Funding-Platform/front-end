import React from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from "axios";

function ProjectForm(){


    return(
        <div>
            <Form>
<Field type = "text" name="project_title" placeholder="Project Title" />
<Field type = "number" name="project_funding" placeholder="Project Funding" />
<Field type = "text" name="mission_statement" placeholder="Mission Statement" />
<Field type = "number" name="assets" placeholder="Assets" />
            </Form>
        </div>
    );
}

const FormikProjectForm = withFormik({
    mapPropsToValues({project_title, project_funding, mission_statement, assets}){
        return {
            project_title: project_title || "",
            project_funding:project_funding || null,
            mission_statement:mission_statement|| "",
            assets: assets || 111
        };
        },
        handleSubmit(values){
            axios
            .post(endpoint, values)
            .then(res => {
                console.log('formsubmitres: ', res)
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log('FormSubmiterr: ', err);
                setSubmitting(false);

                
            });
        }
    
})(ProjectForm);

export default FormikProjectForm;