export default function User(attributes) {
    this.key = attributes.key;
    this.id = attributes.id;
    this.userName = attributes.userName;
    this.bio = attributes.bio || "";
    this.image = attributes.image || "";
}
