import api from "~/services/api";

export function increaseScore(postID: number) {
  api.get(`/voto/positivo?postId=${postID}`);
}

export function decreaseScore(postID: number) {
  api.get(`/voto/negativo?postId=${postID}`);
}
