# The Map App
The Map App is a web application that allows users to search for hints of records that can be linked. The user can search by name or location, and results will pop up as icons on a draggable map. The linking occurs through family search. This application is jointly owned with the RLL.

## How to run locally
* Clone the repository
* Enter the `src/` directory
* Install `nvm` (Node Version Manager) on your machine
* Switch to node version 16.13.0 with nvm - Run `nvm install 16.13.0` and then `nvm use 16.13.0`
* Run `npm install` to install all dependencies
* Run `ng serve`
* Locally, the app will run on port 4200

## Technologies and Dependencies required 
* **Angular**
    * Version 13.2.5
* **Leaflet**
    * Version 1.7.1

## Deployment Strategy
### **Branch to work from:** master


## App Structure

### **File Structure (`src/app` directory)**
| Component | Description |
| ---- | ----------- |
| Map | Displays the map element and the leaflet popups |
| Search | Displays the seach popup |
| Instructions | Controls and formats the detailed instructions |
| Footer | Not currently in use, to be implemented in a future version |


"# townUSA" 
