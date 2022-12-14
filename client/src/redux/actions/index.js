import axios from "axios";
export const GET_ALL_LESSONS = "GET_ALL_LESSONS";
export const GET_ALL_MODULES = "GET_ALL_MODULES";
export const GET_LESSONS_BY_ID = "GET_LESSONS_BY_ID";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const REQUEST = "GET_REQUEST";
export const REQUEST_FAILURE = "REQUEST_FAILURE";
export const GET_BY_NAME_SUCCESS = "GET_BY_NAME_SUCCESS";
export const GET_ALL_CLASSES_SUCCESS = "GET_ALL_CLASSES_SUCCESS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_STANDUPS = "GET_ALL_STANDUPS";
export const GET_ALL_COHORTS = "GET_ALL_COHORTS";
export const POST_NEW_COHORTS = "POST_NEW_COHORTS";
export const POST_NEW_CLASS = "POST_NEW_CLASS";
export const POST_NEW_STANDUPS = "POST_NEW_STANDUPS";
export const GET_TEACHERS = "GET_TEACHERS";
export const POST_NEW_USER = "POST_NEW_USER";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const GET_VIDEOS = "GET_VIDEOS";
export const GET_VIDEOS_BY_NAME = "GET_VIDEOS_BY_NAME";
export const GET_VIDEOS_BY_TEACHER = "GET_VIDEOS_BY_TEACHER";
export const GET_VIDEOS_BY_ID = "GET_VIDEOS_BY_ID";
export const CLEAR_STATE_VIDEOS = "CLEAR_STATE_VIDEOS";
export const CLEAR_STATE_LESSONS = "CLEAR_STATE_LESSONS";
export const CLEAR_STATE_MODULES = "CLEAR_STATE_MODULES";
export const USER_VALIDATE = "USER_VALIDATE";

const URL = "https://students-henry.herokuapp.com";

//*************Modulos************
export function getAllModules() {
	return async function (dispatch) {
		try {
			var json = await axios.get(URL + "/modules");
			return dispatch({
				type: GET_ALL_MODULES,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function clearStateModules() {
	return {
		type: CLEAR_STATE_MODULES,
	};
}
//*****************Cohorts*************
export function getCohorts() {
	return async function (dispatch) {
		try {
			const response = await axios.get(URL + "/cohorts");
			return dispatch({
				type: GET_ALL_COHORTS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function postNewCohort(payload) {
	return async function () {
		var json = await axios.post(URL + "/cohorts/create", payload);
		return json;
	};
}
//****************Classes*****************
export function getAllLessons() {
	return async function (dispatch) {
		try {
			var json = await axios.get(URL + "/classes");
			return dispatch({
				type: GET_ALL_LESSONS,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function getLessonsById(id) {
	return async function (dispatch) {
		var json = await axios.get(URL + `/classes/byId/${id}`);
		return dispatch({
			type: GET_LESSONS_BY_ID,
			payload: json.data,
		});
	};
}
export const setPageNumber = (number) => {
	return {
		type: SET_PAGE_NUMBER,
		payload: number,
	};
};
// Petici??n por nombre desde un query en SearchBar
export const getClassesByName = (name) => {
	return (dispatch) => {
		// Dispatch para cambiar el estado `loading` a `true`
		// m??s adelante ??til para renderizar loaders
		dispatch(request());
		// Ahora s??, la petici??n por nombre
		// De tener ??xito llenamos el estado con las clases
		// Si no, llenamos el estado `errorMsg` con el error
		// M??s adelante se definen las otras acciones llamadas ac??
		axios
			.get(URL + `/classes/byName?name=${name}`)
			.then((response) => dispatch(getByNameSuccess(response.data)))
			.catch((error) => dispatch(requestFailure(error.response.data)));
	};
};
export const request = () => {
	return {
		type: REQUEST,
	};
};
export const getByNameSuccess = (classes) => {
	return {
		type: GET_BY_NAME_SUCCESS,
		payload: classes,
	};
};

export const requestFailure = (errorMsg) => {
	return {
		type: REQUEST_FAILURE,
		payload: errorMsg,
	};
};
export const getAllClassesSuccess = (classes) => {
	return {
		type: GET_ALL_CLASSES_SUCCESS,
		payload: classes,
	};
};
export function postNewClass(payload) {
	return async function () {
		var json = await axios.post(URL + `/classes/create`, payload);
		return json;
	};
}
export function clearStateLessons() {
	return {
		type: CLEAR_STATE_LESSONS,
	};
}
//******************Videos************************
export function createVideo(payload) {
	return async function (dispatch) {
		try {
			const response = await axios.post(URL + "/videos/create", payload);
			return dispatch({
				type: CREATE_VIDEO,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function getAllVideos() {
	return async function (dispatch) {
		try {
			const response = await axios.get(URL + "/videos");
			return dispatch({
				type: GET_VIDEOS,
				payload: response.payload,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function getVideosByName(name) {
	return async function (dispatch) {
		try {
			const response = await axios.get(URL + `/videos/byName?name=${name}`);
			return dispatch({
				type: GET_VIDEOS_BY_NAME,
				payload: response.payload,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function getVideosByTeacher(id) {
	return async function (dispatch) {
		try {
			const response = await axios.get(URL + `/byTeacher/${id}`);
			return dispatch({
				type: GET_VIDEOS_BY_TEACHER,
				payload: response.payload,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function getVideosById(id) {
	return async function (dispatch) {
		var json = await axios.get(URL + `/videos/byId/${id}`);
		console.log(json);
		return dispatch({
			type: GET_VIDEOS_BY_ID,
			payload: json.data,
		});
	};
}
export function clearStateVideos() {
	return {
		type: CLEAR_STATE_VIDEOS,
	};
}
//************************User************************
export function getTeachers() {
	return async function (dispatch) {
		try {
			const response = await axios.get(URL + "/users/teachers");
			console.log(response.data);
			return dispatch({
				type: GET_TEACHERS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function getTodosUsuarios() {
	return async function (dispatch) {
		try {
			var json = await axios.get(URL + "/users");
			return dispatch({
				type: GET_ALL_USERS,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function postNewUser(payload) {
	return async function () {
		var json = await axios.post(URL + `/users/create`, payload);
		return json;
	};
}
export function usersValidate(payload){
    return async function (dispatch){
      var json = await axios.post(URL +`/users/byEmail`, payload);
      return  dispatch({
        type: USER_VALIDATE,
        payload: json.data,
      });            
    }
  }
//*********************Stand Ups**************************
export function getAllStandUps() {
	return async function (dispatch) {
		try {
			var json = await axios.get(URL + "/standups");
			return dispatch({
				type: GET_ALL_STANDUPS,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function postNewStandUp(payload) {
	return async function () {
		var json = await axios.post(URL + `/standups/create`, payload);
		return json;
	};
}
