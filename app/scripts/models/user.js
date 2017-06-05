export default function User(attributes) {
    this.id = attributes.id;
    this.userName = attributes.userName;
    this.bio = attributes.bio || "";
    this.image = attributes.image || "";
}
