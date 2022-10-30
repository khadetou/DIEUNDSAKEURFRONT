const FileAttachement = () => {
  return (
    <div className="notification-dropdown onhover-show-div">
      <div className="dropdown-title">
        <h6>Recent Attachments</h6>
        <a href="reports.html">Show all</a>
      </div>
      <ul>
        <li>
          <div className="media">
            <div className="icon-notification bg-success-light">
              <i className="fas fa-file-word"></i>
            </div>
            <div className="media-body">
              <a href="reports.html">
                <h6>Doc_file.doc</h6>
              </a>
              <span>800MB</span>
            </div>
          </div>
        </li>
        <li>
          <div className="media">
            <div className="icon-notification bg-primary-light">
              <i className="fas fa-file-image"></i>
            </div>
            <div className="media-body">
              <a href="reports.html">
                <h6>Apartment.jpg</h6>
              </a>
              <span>500kb</span>
            </div>
          </div>
        </li>
        <li>
          <div className="media">
            <div className="icon-notification bg-warning-light">
              <i className="fas fa-file-pdf"></i>
            </div>
            <div className="media-body">
              <a href="reports.html">
                <h6>villa_report.pdf</h6>
              </a>
              <span>26MB</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FileAttachement;
