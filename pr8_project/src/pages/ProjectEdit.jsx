import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Layout from "../components/Layout";

function ProjectEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate("/");
      return;
    }

    // Load the existing project data from localStorage
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const project = projects.find(p => p.id === parseInt(id));

    if (project) {
      setName(project.name);
      setDescription(project.description);
    } else {
      navigate('/dashboard');
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Update the project details
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const updatedProjects = projects.map(project => 
      project.id === parseInt(id) ? { ...project, name, description } : project
    );

    localStorage.setItem('projects', JSON.stringify(updatedProjects));

    Swal.fire({
      icon: 'success',
      title: 'Project updated successfully!',
      showConfirmButton: false,
      timer: 1500
    });

    setIsLoading(false);
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 shadow-lg rounded-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Edit Project
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Project Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Project Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description" className="sr-only">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Project Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? 'Updating...' : 'Update Project'}
              </button>
            </div>
          </form>

          <div className="text-center">
            <Link to="/dashboard" className="font-medium text-indigo-600 hover:text-indigo-500">
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProjectEdit;
