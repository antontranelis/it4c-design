export default function GroupsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Groups Feature</h2>
            <p>Join groups and collaborate with like-minded people.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Coming Soon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}