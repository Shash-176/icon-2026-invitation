import "./InvitationCard.css";

function InvitationCard() {
  return (
    <div className="invitation-card">
      <div className="invitation-content">
      <p className="invitation-subtitle">
        Department of Data Science and Technology
      </p>

      <h1 className="invitation-title invitation-title--desktop">
        K.J. Somaiya Institute of Management
      </h1>
      <h1 className="invitation-title invitation-title--mobile">
  K.J. Somaiya Institute of Management
</h1>

      <p className="invitation-italic">
        cordially invites you to be a part of
      </p>

      <img
        src="/assets/logo/icon-logo.png"
        alt="ICON Logo"
        className="invitation-logo"
      />

      <p className="invitation-text">
        ICON is a student-driven academic initiative designed to foster
        innovation, collaboration, and technical excellence among emerging
        professionals.
      </p>

      <p className="invitation-text">
        After a brief pause, ICON returns as a platform that brings together
        ideas, experience, and future-focused thinking.
      </p>

      <p className="invitation-footer">
        13th - 14th February 2026
      </p>
      </div>
    </div>
  );
}

export default InvitationCard;
