# Do you want to create your D&D 5e character, but don't know what options you have?

This tool will help you.

Note: this tool wants to be helpful without being a substitute to the manuals.

---

## Structure

The main componenent, `CharacterSheet` will keep all the parts of a standard character sheet.

`AbilityScores` receive the stats related properties of the global state, if the base stats are all equal 10, it renders the `ChangeBaseAbilityScores` component that lets user roll the stats and assing them to the various characteristics.

Things that maybe I should implement:

- a more sureway to check if the stats have already been rolled. Maybe 0?

`ChangeBaseAbilityScores` starts with a Roll button, that when pressed generates 6 values as 4d6d1 (roll 4 six-sided dice and remove the lowest), it shows them to the user. The user can roll other 6 values, or accept them and assign the values to the characteristics. When all the values are assigned, a Save button appear, that would bring the user selection to the `CharacterSheet` state.

`AbilityScores`, when values have already been assigned, shows the values, including eventual modifiers.
