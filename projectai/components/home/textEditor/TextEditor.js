import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.scss";
import InputTags from "../inputTags/InputTags";
import number1 from '../../../public/assets/imgs/number1.svg'
import number2 from '../../../public/assets/imgs/number2.svg'
import number3 from '../../../public/assets/imgs/number3.svg'
import number4 from '../../../public/assets/imgs/number4.svg'
import {
  Editor,
} from 'slate'
const TextEditor = ({
  submitAI,
  setMaxTokens,
  tags,
  setTags,
  output,
  editor,
  setPlaygroundText
}) => {


  const formik = useFormik({
    initialValues: {
      title: "",
      brief: "",
      tov: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      brief: Yup.string()
        .min(20, "Must be 20 characters or more")
        .required("Required"),
      tov: Yup.string(),
    }),

    onSubmit: () => {
      submitAI();

    },
  });
  return (
    <form className="form-control border-0" onSubmit={formik.handleSubmit}>
      <div
        className={`${styles.inputWrapper}  d-flex ${
          formik.errors.title && formik.touched.title
            ? styles.inputNotValidContainer
            : ""
        }`}
      > 
      <div className={`${styles.imgContainer}`}>
            <img src={number1.src}  width='32px' height='32px' />
       </div>

      <div className="d-flex flex-column w-100">
        <label className={`${styles.label}`} htmlFor="title">
          Title
        </label>
        <input
          className={`form-control py-2 ${styles.form_control} ${
            formik.errors.title && formik.touched.title
              ? styles.input_not_valid
              : ""
          }`}
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          defaultValue={formik.values.title}
          placeholder='Document name'
        />
       
        {formik.touched.title && formik.errors.title ? (
          <div className={`${styles.errors} `}>{formik.errors.title}</div>
        ) : null}
      </div>
      </div>
      <div
        className={`${styles.inputWrapper} d-flex ${
          formik.errors.brief && formik.touched.brief
            ? styles.inputNotValidContainer
            : ""
        }`}
      >
      <div className={`${styles.imgContainer}`}>
            <img src={number2.src}  width='32px' height='32px' />
       </div>
        <div className="d-flex flex-column w-100">

        <label className={`${styles.label}`} htmlFor="brief">
          Brief
        </label>
        <textarea
        
          className={`form-control ${styles.form_control} ${
            formik.errors.brief && formik.touched.brief
              ? styles.input_not_valid
              : ""
          }`}
          id="brief"
          name="brief"
          type="text"
          onChange={
            (setPlaygroundText(formik.values.brief),  formik.handleChange)
          }
          onBlur={formik.handleBlur}
          defaultValue={formik.values.brief}
          rows={4}
          placeholder='Write an article about...'
        ></textarea>
        {formik.touched.brief && formik.errors.brief ? (
          <div className={`${styles.errors} `}>{formik.errors.brief}</div>
        ) : null}
        </div>
      </div>
       

      <div
        className={`${styles.inputWrapper}  d-flex ${
          formik.errors.keywords && formik.touched.keywords
            ? styles.inputNotValidContainer
            : ""
        }`}
      >
      <div className={`${styles.imgContainer}`}>
            <img src={number3.src}  width='32px' height='32px' />
       </div>
       <div className="w-100">
        <InputTags setTags={setTags} tags={tags} />
        </div>
      </div>

      <div
        className={`${styles.inputWrapper} d-flex ${
          formik.errors.maxSize && formik.touched.maxSize
            ? styles.inputNotValidContainer
            : ""
        }`}
      >
      <div className={`${styles.imgContainer}`}>
            <img src={number4.src}  width='32px' height='32px' />
       </div>
       <div>
        <p className="mb-0">Output Length</p>
        <div className={`${styles.maxSize}`}>
        <input
            className={`${styles.input}`}
            onChange={(setMaxTokens(100), formik.handleChange)}
            onBlur={formik.handleBlur}
            id="a"
            type="radio"
            name="hopping"
            defaultValue="100"
          />
          <label className={`${styles.label}`} htmlFor="a">
            <span></span>short
     

          </label>
         
             <input
            className={`${styles.input}`}
            onChange={(setMaxTokens(250), formik.handleChange)}
            onBlur={formik.handleBlur}
            id="b"
            type="radio"
            name="hopping"
            defaultValue="250"
          />
          <label className={`${styles.label}`} htmlFor="b">
            <span></span>medium
     

          </label>
       
          <input
            className={`${styles.input}`}
            onChange={(setMaxTokens(500), formik.handleChange)}
            onBlur={formik.handleBlur}
            id="c"
            type="radio"
            name="hopping"
            defaultValue="500"
          />
          <label className={`${styles.label}`} htmlFor="c">
            <span></span>Long
     

          </label>
         
          <div className={`${styles.worm}`}>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
            <div className={`${styles.worm__segment}`}></div>
          </div>
        </div>
      </div>
</div>
  {output && (
    <div className={`${styles.outputWrapper}`}>
    <h2>Project AI:</h2>
     <div className={`${styles.output}`}>
              {output}
      </div>
      </div>

      )}

      <div className={`${styles.container} ${styles.inputWrapper}`}>
      {output ? (
        <div className="d-flex w-100 align-items-center">    
         <div   className={`   ${styles.insert} btn w-100 `}
         onClick={()=> {
        
          Editor.insertNode(editor, {
      type: 'paragraph',
      children: [{ text: output }],
    })
         }}
         >
         Insert at cursor
         <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0833 5.5L15.75 10.5L11.0833 15.5M5.75 5.5L10.4167 10.5L5.75 15.5" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
        <button type="submit" className={`${styles.generate}  btn w-100 `}>
        Generate another
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 3.5V7.875H4.25883M17.6958 9.625C17.2653 6.17198 14.3197 3.5 10.75 3.5C7.81229 3.5 5.29726 5.30965 4.25883 7.875M4.25883 7.875H8.125M17.75 17.5V13.125H17.2412M17.2412 13.125C16.2027 15.6904 13.6877 17.5 10.75 17.5C7.18033 17.5 4.23474 14.828 3.80416 11.375M17.2412 13.125H13.375" stroke="#A0A3B1" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>

        </div>
      ) : (
        <button type="submit" className={`${styles.submit}  btn w-100 `}>
          Generate
        </button>
        )}
      </div>
    </form>
  );
};

export default TextEditor;
