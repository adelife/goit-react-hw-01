import styles from './profile.module.css';

export const Profile= ({
    name,
    tag,
    location,
    image,
    stats: {followers, views, likes}
})=> {
    return (
        <div className={styles.profileCard}>
  <div className={styles.profileInfo}>
    <img className={styles.profileImg}
      src={image}
      alt="User avatar"
    />
    <p className={styles.profileName}>{name}</p>
    <p className={styles.profileNikname}>@{tag}</p>
    <p className={styles.profileCountry}>{location}</p>
  </div>

  <ul className={styles.profileList}>
    <li className={styles.ProfileItem}>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li className={styles.ProfileItem}>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li className={styles.ProfileItem}>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>

    )
}