import React from 'react'

function MoreInfo(props) {
  return (
    <div>

<div id="accordion" className="accordion" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="pasteHeading" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#pasteCollapse" aria-expanded="true" aria-controls="pasteCollapse"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>paste:</b>
      </button>
    </h2>
    <div id="pasteCollapse" className="accordion-collapse collapse show" aria-labelledby="pasteHeading" data-bs-parent="#accordion">
      <div className="accordion-body"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to directly paste your copied text to the textarea of WordPlaYer</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="upperCaseHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#upperCaseCollapse" aria-expanded="false" aria-controls="upperCaseCollapse"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>UpperCase:</b>
      </button>
    </h2>
    <div id="upperCaseCollapse" className="accordion-collapse collapse" aria-labelledby="upperCaseHeading" data-bs-parent="#accordion">
      <div className="accordion-body"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to convert lowercase to uppercase</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="lowerCaseHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lowerCaseCollapse" aria-expanded="false" aria-controls="lowerCaseCollapse"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>LowerCase:</b>
      </button>
    </h2>
    <div id="lowerCaseCollapse" className="accordion-collapse collapse" aria-labelledby="lowerCaseHeading" data-bs-parent="#accordion" >
      <div className="accordion-body" style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to convert uppercase to lowercase</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="removeSpacesHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#removeSpacesCollapse" aria-expanded="false" aria-controls="removeSpacesCollapse"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>Remove Spaces:</b>
      </button>
    </h2>
    <div id="removeSpacesCollapse" className="accordion-collapse collapse" aria-labelledby="removeSpacesHeading" data-bs-parent="#accordion">
      <div className="accordion-body"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to remove extra spaces from the text</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="breakLinesHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#breakLinesCollapse" aria-expanded="false" aria-controls="breakLinesCollapse"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>Break into Lines:</b>
      </button>
    </h2>
    <div id="breakLinesCollapse" className="accordion-collapse collapse" aria-labelledby="breakLinesHeading" data-bs-parent="#accordion">
      <div className="accordion-body"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to break long texts into lines according to the number of words per line you have entered</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="copyTextHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#copyTextCollapse" aria-expanded="false" aria-controls="copyTextCollapse" style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>Copy text:</b>
      </button>
    </h2>
    <div id="copyTextCollapse" className="accordion-collapse collapse" aria-labelledby="copyTextHeading" data-bs-parent="#accordion">
      <div className="accordion-body"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to copy the text from the textarea of WordPlaYer</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="clearTextHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#clearTextCollapse" aria-expanded="false" aria-controls="clearTextCollapse"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>Clear text:</b>
      </button>
    </h2>
    <div id="clearTextCollapse" className="accordion-collapse collapse" aria-labelledby="clearTextHeading" data-bs-parent="#accordion">
      <div className="accordion-body" style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to clear the text from the textarea of WordPlaYer</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="searchWordHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#searchWordCollapse" aria-expanded="false" aria-controls="searchWordCollapse"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>Search Word:</b>
      </button>
    </h2>
    <div id="searchWordCollapse" className="accordion-collapse collapse" aria-labelledby="searchWordHeading" data-bs-parent="#accordion">
      <div className="accordion-body"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to search the word you want to replace</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="replaceWordHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#replaceWordCollapse" aria-expanded="false" aria-controls="replaceWordCollapse" style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>Replace Word:</b>
      </button>
    </h2>
    <div id="replaceWordCollapse" className="accordion-collapse collapse" aria-labelledby="replaceWordHeading" data-bs-parent="#accordion" >
      <div className="accordion-body"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to replace the word you have searched with the new word you have entered</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="replaceHeading">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#replaceCollapse" aria-expanded="false" aria-controls="replaceCollapse"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <b>Replace:</b>
      </button>
    </h2>
    <div id="replaceCollapse" className="accordion-collapse collapse" aria-labelledby="replaceHeading" data-bs-parent="#accordion">
      <div className="accordion-body"   style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <p>It helps to replace the word you have searched with the new word you have entered</p>
      </div>
    </div>
  </div>

 
</div>


        </div>
  )
}

export default MoreInfo