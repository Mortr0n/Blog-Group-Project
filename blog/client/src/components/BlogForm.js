import React, { useState } from 'react'
import styles from '../styles/BlogForm.module.css'
import styled from 'styled-components'

const BlogForm = (props) => {

    const {initialBlogPostTitle, initialBlogPostDescription, initialBlogPostContent, onSubmitProp, errors} = props

    const [blogPostTitle, setBlogPostTitle] = useState(initialBlogPostTitle); 
    const [blogPostDescription, setBlogPostDescription] = useState(initialBlogPostDescription);
    const [blogPostContent, setBlogPostContent] = useState(initialBlogPostContent);

    const onSubmitHandler = e => {

        e.preventDefault();

        onSubmitProp({blogPostTitle, blogPostDescription, blogPostContent})
    }

    return (
        <div>
            <div className={`row`}>
                <div className={`form-group col-md-6 offset-md-3 p-3 mt-2 ${styles.formContainer}`}>
                    <form onSubmit={onSubmitHandler} className={`${styles.bgColorLightBlue}`}>

                        
                            <p className={`fw-bold ${styles.label}`}>TITLE</p>
                            {
                                errors.blogPostTitle ?
                                <label className="text-danger fw-bold"style={{'backgroundColor':'rgb(111, 178, 255)'}} > {errors.blogPostTitle.message} </label>
                                : null
                            }
                            <input type="text" value={blogPostTitle} className='form-control' onChange = {(e)=>setBlogPostTitle(e.target.value)}/>
                        
                            <p className={`fw-bold mt-2 ${styles.label}`}>DESCRIPTION</p>
                            {
                                errors.blogPostDescription ?
                                <label className="text-danger fw-bold"style={{'backgroundColor':'rgb(111, 178, 255)'}} > {errors.blogPostDescription.message} </label>
                                : null
                            }
                            <textarea value={blogPostDescription} className='form-control' onChange = {(e)=>setBlogPostDescription(e.target.value)} rows={3}></textarea>
                        
                            <p className={`fw-bold mt-2 ${styles.label}`}>CONTENT</p>
                            {
                                errors.blogPostContent ?
                                <label className="text-danger fw-bold"style={{'backgroundColor':'rgb(111, 178, 255)'}} > {errors.blogPostContent.message} </label>
                                : null
                            }
                            <textarea value={blogPostContent} className='form-control' onChange = {(e)=>setBlogPostContent(e.target.value)} rows={10}></textarea>

                            <input type="submit" className={`btn btn-outline-light mt-3`} style={{'display':'block', 'width':'100%'}}/>

                    </form>
                </div>
            </div>

        </div>
    )
}
export default BlogForm;