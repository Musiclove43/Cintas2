
import React from 'react';
import {CellComponent} from "./CellComponent";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import AssignItem from "../assignItem";
import ProtectedStore from "../protected-store";


export class MachineContainer extends React.Component {

    /**
     * pull the contructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            machines: [],

            // we have to select the machine
            selectedMachine: "",

            // store cells somewhere
            cells: [],

            // set a "fun" variable
            isLoading: false
        };

        this.updateSelectedMachine = this.updateSelectedMachine.bind(this);
        this.deleteCell = this.deleteCell.bind(this);
    }

    loadMachineData() {
        // load cells will hit our API, and store the data into the cell array.
        fetch( `https://rest.garmentvendor.app/stations?accountNum=${this.props.account}`, {
            method: 'get',
            contentType: 'application/json',
            headers: {
                // TODO: do not keep this, just using this for development, because the token  keeps expiring.
                Authorization: 'Bearer ' + ProtectedStore.get('user').Token,
            },
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({machines: result});
            },
            (error) => {
                console.log(error)
            }
        );
    }

    componentDidMount() {
      console.log(this.props);
      this.loadMachineData();
    }

    /**
     * a juicy update never hurt no hoe
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.account !== this.props.account) {
            this.setState({selectedMachine: "", cells: []});
            this.loadMachineData();
        }
    }

    updateSelectedMachine(e)
    {
        // update the state
        console.log(e.target.value)
        console.log(e.target.value.cellData)
        this.setState({selectedMachine: e.target.value});
        this.setState({cells: e.target.value.cellData});

    }

    deleteCell(e)
    {
        fetch( "https://rest.garmentvendor.app/station/cell" , {
            method: 'post',
            contentType: 'application/json',
            headers: {
                // TODO: do not keep this, just using this for development, because the token  keeps expiring.
                Authorization: 'Bearer ' + ProtectedStore.get('user').Token,
            },
            body: JSON.stringify({
                "stationNum": this.state.selectedMachine.stationNum,
                "cellNum": e,
            })
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            }
        );
    }

    render() {
        let cellComponents = [];
        for(let i = 0; i < this.state.cells.length; i++) {
            cellComponents.push((
                <CellComponent index={i}
                               selectedMachine={this.state.selectedMachine.stationNum}
                               cell={this.state.cells[i]}
                               deleteCell={this.deleteCell}
                />
            ));
        }

        return (
            <div>
                <h1>Machine Container</h1>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Select Machine</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.selectedMachine}
                        onChange={this.updateSelectedMachine}>
                        {this.state.machines.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option.machineDescription}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}>
                    {cellComponents}
                </div>
            </div>
        );
    }
}
