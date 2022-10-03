import React from "react";

import styles from "./styles.module.scss";

const InputTags = ({tags, setTags}) => {

  function handleKeyDown(e) {
    
if(e.key === ' '){
    const value = e.target.value;
     if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
}
    if (e.key !== "Enter"  ) return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <>
      <label  className={`${styles.label}`} htmlFor="keywords">
        Keywords
      </label>

      <div
        className={`${styles.tagsInputContainer} form-control  d-flex align-items-center flex-warp py-0`}
      >
        {tags&& tags.map((tag, index) => (
          <div className={` ${styles.pointer}`} key={index}>
            <span
              onClick={() => removeTag(index)}
              className={`cursor-pointer position-relative badge text-dark ${styles.text}`}
            >
              {tag}

              <span
                className={` cursor-pointer position-absolute top-0 start-100 translate-middle ${styles.badge} rounded-circle`}
              >
                <svg
                  fill="#e74c3c"
                  width="12px"
                  height="12px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                  enableBackground="new 0 0 50 50"
                  xmlSpace="preserve"
                >
                  <path
                    fill="##e74c3c"
                    d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
	l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
	L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
	c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
	C8.625,39.813,8.625,40.447,9.016,40.837z"
                  />
                </svg>
                <span className="visually-hidden">New alerts</span>
              </span>
            </span>

            {/* <span className={`${styles.close}`}  onClick={() => removeTag(index)}>&times;</span> */}
          </div>
        ))}
        <input
          onKeyDown={handleKeyDown}
          type="text"
          className={`${styles.tagsInput} py-2`}
          id="keywords"
          name="keywords"
          placeholder="e.g. Examples of keywords"
        />
      </div>
    </>
  );
};

export default InputTags;
