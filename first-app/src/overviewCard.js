function OverviewCard({ icon, title, description }) {
  return (
    <div className="card">
      <h2>
        {icon} {title}
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default OverviewCard;
