import { useState } from "react";
import { LANGUAGES } from "../constants";
import useAuthUser from "../hooks/useAuthUser";
import useUpdateProfile from "../hooks/useUpdateProfile";
import toast from "react-hot-toast";
import { UserIcon, MapPinIcon, GlobeIcon, BookOpenIcon, EditIcon } from "lucide-react";

const ProfilePage = () => {
  const { authUser } = useAuthUser();
  const { mutate: updateProfileMutation, isPending } = useUpdateProfile();
  
  const [formData, setFormData] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    profilePic: authUser?.profilePic || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return;
    }

    updateProfileMutation(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
            <EditIcon className="size-8 text-primary" />
            Edit Profile
          </h1>
          <p className="text-base-content opacity-70 mt-2">
            Update your profile information and language preferences
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-lg mb-4 flex items-center gap-2">
                <UserIcon className="size-5" />
                Basic Information
              </h2>
              
              {/* Profile Picture */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Profile Picture URL</span>
                </label>
                <input
                  type="url"
                  name="profilePic"
                  value={formData.profilePic}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="https://example.com/your-photo.jpg"
                />
              </div>

              {/* Full Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name *</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Bio */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Bio</span>
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-24 resize-none"
                  placeholder="Tell others about yourself, your interests, and language goals..."
                  maxLength={500}
                />
                <label className="label">
                  <span className="label-text-alt">{formData.bio.length}/500 characters</span>
                </label>
              </div>

              {/* Location */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium flex items-center gap-2">
                    <MapPinIcon className="size-4" />
                    Location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="City, Country"
                />
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-lg mb-4 flex items-center gap-2">
                <GlobeIcon className="size-5" />
                Language Preferences
              </h2>
              
              {/* Native Language */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium flex items-center gap-2">
                    <BookOpenIcon className="size-4" />
                    Native Language
                  </span>
                </label>
                <select
                  name="nativeLanguage"
                  value={formData.nativeLanguage}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="">Select your native language</option>
                  {LANGUAGES.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              {/* Learning Language */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium flex items-center gap-2">
                    <BookOpenIcon className="size-4" />
                    Learning Language
                  </span>
                </label>
                <select
                  name="learningLanguage"
                  value={formData.learningLanguage}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="">Select the language you're learning</option>
                  {LANGUAGES.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-sm" />
                  Updating...
                </>
              ) : (
                "Update Profile"
              )}
            </button>
          </div>
        </form>

        {/* Preview Section */}
        {formData.profilePic && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Profile Preview</h3>
            <div className="card bg-base-100 shadow-lg max-w-sm">
              <div className="card-body p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="avatar size-12">
                    <img 
                      src={formData.profilePic} 
                      alt="Profile preview"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150?text=No+Image";
                      }}
                    />
                  </div>
                  <h3 className="font-semibold truncate">{formData.fullName || "Your Name"}</h3>
                </div>
                {formData.bio && (
                  <p className="text-sm opacity-70 mb-2">{formData.bio}</p>
                )}
                {(formData.nativeLanguage || formData.learningLanguage) && (
                  <div className="flex flex-wrap gap-1.5">
                    {formData.nativeLanguage && (
                      <span className="badge badge-secondary text-xs">
                        Native: {formData.nativeLanguage}
                      </span>
                    )}
                    {formData.learningLanguage && (
                      <span className="badge badge-outline text-xs">
                        Learning: {formData.learningLanguage}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;